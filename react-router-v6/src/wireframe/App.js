import styles from './App.module.css';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';

/* -------------------------------------------------------------------------- */

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Dashboard';
import Products from 'pages/Products/Products';
import Landing from 'pages/Landing/Landing';

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
          <Route path="/" element={<Landing />} />
          <Route path="products" element={<Products />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
