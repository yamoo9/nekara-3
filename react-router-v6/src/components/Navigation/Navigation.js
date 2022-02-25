import styles from './Navigation.module.css';
import { string, exact, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { SkipToContent } from 'components';
import { classNames } from 'utils';
import { useAuth } from 'contexts';

/* -------------------------------------------------------------------------- */

const NavigationItemType = exact({
  id: string,
  href: string,
  text: string,
});

export function Navigation({ list, className, ...restProps }) {

  const { currentUser } = useAuth();

  return (
    <>
      <SkipToContent />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => {

              // currentPage가 아니라, item.href 값으로 조건 처리해야 함
              if (!currentUser && item.href.includes('dashboard')) {
                return null;
              }

              return (
                <Navigation.Item
                  key={item.id}
                  item={item}
                />
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}

Navigation.propTypes = {
  list: arrayOf(NavigationItemType),
  className: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function NavigationItem({ item, ...restProps }) {
  return (
    <li className={styles.item} {...restProps}>
      <Link
        to={item.href}
        className={styles.link}
      >
        {item.text}
      </Link>
    </li>
  );
};

Navigation.Item.propTypes = {
  item: NavigationItemType.isRequired,
};
