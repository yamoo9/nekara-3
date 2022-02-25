import styles from './App.module.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';
import { lazyComponent } from 'utils';
import { useAuth } from 'contexts';

/* -------------------------------------------------------------------------- */

const Landing = lazyComponent(() => import('pages/Landing/Landing'));
const Products = lazyComponent(() => import('pages/Products/Products'));
const ProductDetail = lazyComponent(() => import('pages/Products/ProductDetail'));
const Dashboard = lazyComponent(() => import('pages/Dashboard/Dashboard'));
const Profile = lazyComponent(() => import('pages/Dashboard/Profile'));
const Settings = lazyComponent(() => import('pages/Dashboard/Settings'));
const PageNotFound = lazyComponent(() => import('pages/PageNotFound/PageNotFound'));
const ProtectedRoute = lazyComponent(() => import('pages/ProtecteRoute/ProtectedRoute'));

/* -------------------------------------------------------------------------- */

export default function WireframeApp() {
  const [navigation] = useState([
    { id: 'landing', href: '/', text: '홈' },
    { id: 'products', href: '/products', text: '프로덕트' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
  ]);

  const [dashboardNavigation] = useState([
    { id: 'profile', content: '프로필' },
    { id: 'settings', content: '설정' },
  ]);

  const { user, permission } = useAuth();

  return (
    <div className={styles.wireframe}>
      <Header className="wireframeBox">
        <Navigation list={navigation} />
      </Header>
      <Main>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="dashboard" element={
            <ProtectedRoute isAllowed={user && permission === 'admin'}>
              <Dashboard navigation={dashboardNavigation} />
            </ProtectedRoute>
          }>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
