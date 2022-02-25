import styles from './Navigation.module.css';
import { string, exact, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { SkipToContent } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

const NavigationItemType = exact({
  id: string,
  href: string,
  text: string,
});

export function Navigation({ list, className, ...restProps }) {
  return (
    <>
      <SkipToContent />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => (
              <Navigation.Item
                key={item.id}
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
  className: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function ({ item, ...restProps }) {
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
