import styles from './Dashboard.module.css';
import { WireframeBox } from 'components';
import { classNames, lazyComponent } from 'utils';
import { NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* -------------------------------------------------------------------------- */

const SettingList = lazyComponent(() => import('./SettingList'));

export default function Dashboard({ navigation, ...restProps }) {
  const { pathname } = useLocation();

  if (/\/dashboard\/?$/.test(pathname)) {
    return <Navigate to="profile" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`대시보드 ⌁ ${process.env.REACT_APP_TITLE}`}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)} {...restProps}>
        <h2 tabIndex={0} className={styles.headline}>
          대시보드
        </h2>
        <WireframeBox className={styles.grid} style={{ height: null }}>
          <WireframeBox className={styles.gridItem1} style={{ height: null }}>
            <nav className={styles.subNavigation}>
              <ul className="resetList">
                {navigation.map(({ id, content }) => (
                  <li key={id}>
                    <NavLink
                      to={id}
                      className={({ isActive }) =>
                        classNames(styles.navLink)(
                          !isActive ? '' : styles.active
                        )
                      }
                    >
                      {content}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Outlet />
          </WireframeBox>
          <WireframeBox className={styles.gridItem2}>
            {pathname.includes('settings') && <SettingList />}
          </WireframeBox>
        </WireframeBox>
      </div>
    </>
  );
}
