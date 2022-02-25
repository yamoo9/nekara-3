import styles from './App.module.css';
import { useMemo } from 'react';
import { Header, Main, Footer } from 'containers';
import { Navigation } from 'components';
import { useRouter } from 'hooks';

import Landing from 'pages/Landing/Landing';
import Products from 'pages/Products/Products';
import Dashboard from 'pages/Dashboard/Dashboard';

/* -------------------------------------------------------------------------- */

const getPageComponent = (currentPage) => {
  switch (currentPage) {
    case 'dashboard':
      return Dashboard;
    case 'products':
      return Products;
    case 'landing':
    default:
      return Landing;
  }
};

/* -------------------------------------------------------------------------- */

export default function WireframeApp() {

  const { navigation, currentPage } = useRouter();
  const CurrentPageComponent = useMemo(() => getPageComponent(currentPage), [currentPage]);

  return (
    <div className={styles.wireframe}>
      <Header className="wireframeBox">
        <Navigation list={navigation} currentPage={currentPage} />
      </Header>
      <Main>
        <CurrentPageComponent />
      </Main>
      <Footer>
        <div className="wireframeBox" />
      </Footer>
    </div>
  );
}
