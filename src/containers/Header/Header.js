import styles from './Header.module.css';
import { string } from 'prop-types';
import { classNames } from 'utils';

/* component ---------------------------------------------------------------- */

export function Header({ className, ...restProps }) {
  return (
    <header
      className={classNames(styles.container)(className)}
      {...restProps}
    />
  );
}

Header.propTypes = {
  className: string,
};
