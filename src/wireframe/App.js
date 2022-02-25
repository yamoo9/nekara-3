import styles from './App.module.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';
import { lazyComponent } from 'utils';

/* -------------------------------------------------------------------------- */

const Landing = lazyComponent(() => import('pages/Landing/Landing'));
const Products = lazyComponent(() => import('pages/Products/Products'));
const Dashboard = lazyComponent(() => import('pages/Dashboard/Dashboard'));

/* -------------------------------------------------------------------------- */

export default function WireframeApp() {
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
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
