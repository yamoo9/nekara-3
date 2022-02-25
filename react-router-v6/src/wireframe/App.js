import styles from './App.module.css';
import { useReducer, useEffect, useMemo } from 'react';
import { number } from 'prop-types';
import { Header, Main, Footer } from 'containers';
import { Navigation, WireframeBox } from 'components';
import { classNames } from 'utils';

/* ROUTER STATE ------------------------------------------------------------- */

const initialRouteInfo = {
  currentPage: 'landing',
  navigation: [
    { id: 'landing', href: '/landing', text: '홈' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
    { id: 'products', href: '/products', text: '프로덕트' },
  ],
};

const CHANGE_ROUTE ='CHANGE_ROUTE';

const routeReducer = (state, action) => {
  if (action.type === CHANGE_ROUTE) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  return state;
};

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
  const [routes, dispatch] = useReducer(routeReducer, initialRouteInfo);

  useEffect(() => {
    const { location } = window;
    if (location.pathname === '/') location.replace('/landing');

    dispatch({
      type: 'CHANGE_ROUTE',
      payload: location.pathname.replace('/', ''),
    });
  }, []);

  const navigation = useMemo(() => routes.navigation, [routes.navigation]);
  const currentPage = useMemo(() => routes.currentPage, [routes.currentPage]);
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

/* PAGE COMPONENTS ---------------------------------------------------------- */
// 각 페이지 컴포넌트를 pages 디렉토리로 옮깁니다.

function Landing() {
  return (
    <div className={classNames('page')(styles.landing)}>
      <h2 tabIndex={0} className={styles.headline}>
        홈
      </h2>
      <WireframeBox className={classNames('child')(styles.grid)}>
        <WireframeBox style={{ height: null }} />
        <WireframeBox
          className={classNames('children')(styles.gridItem)}
          style={{ height: null }}
        />
        <WireframeBox style={{ height: null }} />
      </WireframeBox>
    </div>
  );
}

function Dashboard() {
  return (
    <div className={classNames('page')(styles.dashboard)}>
      <h2 tabIndex={0} className={styles.headline}>
        대시보드
      </h2>
      <WireframeBox className={styles.grid} style={{ height: null }}>
        <WireframeBox className={styles.gridItem1} />
        <WireframeBox className={styles.gridItem2} style={{ height: null }}>
          <WireframeBox className={styles.child1} />
          <WireframeBox className={styles.child2} />
        </WireframeBox>
      </WireframeBox>
    </div>
  );
}

function Products({ count = 10, ...restProps }) {
  return (
    <div className={classNames('page')(styles.products)} {...restProps}>
      <h2 tabIndex={0} className={styles.headline}>
        프로덕트
      </h2>
      <WireframeBox className={styles.grid} style={{ height: null }}>
        {Array(count)
          .fill(null)
          .map((_t, i) => (
            <WireframeBox key={i} />
          ))}
      </WireframeBox>
    </div>
  );
}

Products.defaultProps = {
  count: 10
}

Products.propTypes = {
  count: number
}