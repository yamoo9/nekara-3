import styles from './App.module.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';
import { lazyComponent } from 'utils';
import { useAuth } from 'contexts';

/* -------------------------------------------------------------------------- */

const Landing = lazyComponent('Landing');
const Products = lazyComponent('Products');
const ProductDetail = lazyComponent('Products/ProductDetail');
const Dashboard = lazyComponent('Dashboard');
const Profile = lazyComponent('Dashboard/Profile');
const SettingList = lazyComponent('Dashboard/SettingList');
const PageNotFound = lazyComponent('PageNotFound');
const ProtectedRoute = lazyComponent('ProtectedRoute');

/* -------------------------------------------------------------------------- */

export default function WireframeApp() {
  const { currentUser, permission } = useAuth();

  const [navigation] = useState([
    { id: 'landing', href: '/', text: '홈' },
    { id: 'products', href: '/products', text: '프로덕트' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
  ]);

  const [dashboardNavigation] = useState([
    { id: 'profile', content: '프로필' },
    { id: 'settings', content: '설정' },
  ]);

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
          <Route
            path="dashboard"
            element={
              <ProtectedRoute
                isAllowed={currentUser && permission === 'Administrator'}
              >
                <Dashboard list={dashboardNavigation} />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<SettingList />} />
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
