import styles from './App.module.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';
import { lazyComponent } from 'utils';

/* -------------------------------------------------------------------------- */

const Landing = lazyComponent('Landing');
const Products = lazyComponent('Products');
const ProductDetail = lazyComponent('Products/ProductDetail');
const Dashboard = lazyComponent('Dashboard');
const PageNotFound = lazyComponent('PageNotFound');

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
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
