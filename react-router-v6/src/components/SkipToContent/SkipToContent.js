import styles from './SkipToContent.module.css';
import { createPortal } from 'react-dom';
import { string } from 'prop-types';
import { A11yHidden, Link } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function SkipToContent({
  targetId,
  className,
  currentPage,
  label,
  ...restProps
}) {
  return createPortal(
    <A11yHidden
      as={Link}
      to={`/${currentPage}#${targetId}`}
      className={classNames(`${styles.container} focusable`)(className)}
      {...restProps}
    >
      {label}
    </A11yHidden>,
    document.getElementById('skip-to-content')
  );
}

SkipToContent.defaultProps = {
  targetId: 'content',
  label: '메인 영역으로 이동',
};

SkipToContent.propTypes = {
  targetId: string,
  className: string,
  label: string,
  currentPage: string.isRequired,
};
