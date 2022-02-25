import styles from './App.module.css';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';

/* -------------------------------------------------------------------------- */

import { useState, lazy, Suspense } from 'react';
import { Routes, Route, /* useRoutes */ } from 'react-router-dom';

/* -------------------------------------------------------------------------- */

// [동기]
// import Dashboard from 'pages/Dashboard/Dashboard';
// import Products from 'pages/Products/Products';
// import Landing from 'pages/Landing/Landing';
import { Spinner } from 'components';

// [비동기]
// lazy를 사용해 dynamic import ← page component
const Landing = lazy(() => import('pages/Landing/Landing'));
const Products = lazy(() => import('pages/Products/Products'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));

/* -------------------------------------------------------------------------- */

export default function WireframeApp() {

  // 라우터 구성 (JSON 문법처럼)
  // const renderRouteElement = useRoutes([
  //   { index: true, element: <Landing /> },
  //   { path: 'products', element: <Products /> },
  //   { path: 'dashboard', element: <Dashboard /> },
  // ]);

  const [navigation] = useState([
    { id: 'landing', href: '/', text: '홈' },
    { id: 'products', href: '/products', text: '프로덕트' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
  ]);
  
  return (
    <div className={styles.wireframe}>
      <Header className="wireframeBox">
        <Navigation list={navigation} />
      </Header>
      <Main>
        {/* {renderRouteElement} */}
        <Suspense fallback={<Spinner size={200} opacity={0.8} />}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="products" element={<Products />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
