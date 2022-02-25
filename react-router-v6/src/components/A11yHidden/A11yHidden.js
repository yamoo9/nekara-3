import { classNames } from 'utils';
import { elementType, oneOfType, string } from 'prop-types';

/* -------------------------------------------------------------------------- */

export function A11yHidden({ as, className, ...restProps }) {
  const Comp = as;
  return (
    <Comp className={classNames('a11yHidden')(className)} {...restProps} />
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
};

A11yHidden.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
};
