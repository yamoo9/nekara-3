import styles from './Dashboard.module.css';
import { arrayOf, bool, exact, string } from 'prop-types';
import {
  NavLink,
  Outlet,
  Navigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { classNames, setDocumentTitle } from 'utils';
import { WireframeBox } from 'components';

export default function Dashboard({
  list,
  redirect,
  redirectPath,
  ...restProps
}) {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  if (redirect && /dashboard\/?$/i.test(pathname)) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('대시보드')}</title>
      </Helmet>
      <div className={classNames('page')(styles.dashboard)} {...restProps}>
        <h2 tabIndex={0} className={styles.headline}>
          대시보드
        </h2>
        <WireframeBox className={styles.grid} style={{ height: null }}>
          <WireframeBox className={styles.gridItem1} style={{ height: null }}>
            <nav className={styles.subNavigation}>
              <ul className="resetList">
                {list.map(({ id, content }) => (
                  <li key={id}>
                    <NavLink
                      to={id}
                      className={({ isActive }) =>
                        classNames(styles.navLink)(
                          isActive ? styles.active : ''
                        )
                      }
                    >
                      {content}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {pathname.includes('profile') ? (
              <WireframeBox className={styles.child1} />
            ) : (
              <WireframeBox
                className={styles.child2}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <button
                  type="button"
                  className={styles.button}
                  disabled={!filter}
                  onClick={() => {
                    setSearchParams();
                  }}
                >
                  모든 옵션 보기
                </button>
                <button
                  type="button"
                  className={styles.button}
                  disabled={filter}
                  onClick={() => {
                    setSearchParams({
                      filter: 'active',
                    });
                  }}
                >
                  활성 옵션만 보기
                </button>
              </WireframeBox>
            )}
          </WireframeBox>
          <WireframeBox className={styles.gridItem2} style={{ height: null }}>
            <Outlet />
          </WireframeBox>
        </WireframeBox>
      </div>
    </>
  );
}

Dashboard.defaultProps = {
  redirect: true,
  redirectPath: 'profile',
};

Dashboard.propTypes = {
  redirect: bool,
  redirectPath: string,
  list: arrayOf(
    exact({
      id: string,
      content: string,
    })
  ).isRequired,
};
