import styles from './Navigation.module.css';
import { string, exact, arrayOf } from 'prop-types';
import { Link, SkipToContent } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

const NavigationItemType = exact({
  id: string,
  href: string,
  text: string,
});

export function Navigation({ list, className, currentPage, ...restProps }) {
  return (
    <>
      <SkipToContent currentPage={currentPage} />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => (
              <Navigation.Item
                key={item.id}
                currentPage={currentPage}
                item={item}
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

Navigation.propTypes = {
  list: arrayOf(NavigationItemType),
  currentPage: string,
  className: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function ({ item, currentPage, ...restProps }) {
  return (
    <li className={styles.item} {...restProps}>
      <Link
        to={item.href}
        className={styles.link}
        activeClass={item.href.includes(currentPage) ? styles.active : ''}
      >
        {item.text}
      </Link>
    </li>
  );
};

Navigation.Item.propTypes = {
  currentPage: string.isRequired,
  item: NavigationItemType.isRequired,
};
