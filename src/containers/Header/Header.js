import styles from './Header.module.css';
import { string, element } from 'prop-types';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function Header({ className, children, ...restProps }) {

  return (
    <header
      className={classNames(styles.container)(className)}
      {...restProps}
    >
      {children}
      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.button}
        >
          로그인
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: string,
  children: element,
};
