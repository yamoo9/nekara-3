import styles from './Footer.module.css';
import { string } from 'prop-types';
import { classNames } from 'utils';

export function Footer({ className, ...restProps }) {
  return (
    <footer
      className={classNames(styles.container)(className)}
      {...restProps}
    />
  );
}

Footer.propTypes = {
  className: string,
};
