import styles from './Header.module.css';
import { string, element } from 'prop-types';
import { classNames } from 'utils';
import { useAuth } from 'contexts';

/* -------------------------------------------------------------------------- */

export function Header({ className, children, ...restProps }) {
  const { currentUser, signIn, signOut } = useAuth();

  return (
    <header className={classNames(styles.container)(className)} {...restProps}>
      {children}
      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.button}
          onClick={currentUser ? signOut : signIn}
        >
          {currentUser ? '로그아웃' : '로그인'}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: string,
  children: element,
};
