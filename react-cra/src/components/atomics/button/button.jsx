import { Link } from 'components';
import classNames from 'classnames';
import styles from './button.module.css';

export default function Button({
  to,
  type,
  className,
  primary,
  secondary,
  noBorder,
  ...restProps
}) {
  const buttonClassName = classNames(
    styles.container,
    { [styles.primary]: primary },
    { [styles.secondary]: secondary },
    { [styles.noBorder]: noBorder }
  );

  if (!to) {
    return <button type={type} className={buttonClassName} {...restProps} />;
  } else {
    return <Link to={to} className={buttonClassName} {...restProps} />;
  }
}

Button.defaultProps = {
  type: 'button',
  className: '',
};
