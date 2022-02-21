import { Wrapper } from './checker.styled';
import { CheckerProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  checked: false,
  loading: false,
  size: 16,
};

export const Checker = ({
  label,
  checked,
  loading,
  size,
  onChange,
  ...restProps
}: CheckerProps): JSX.Element => {
  return (
    <Wrapper checked={checked} $loading={loading} $size={size} {...restProps}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        title={label}
      />
    </Wrapper>
  );
};

Checker.defaultProps = defaultProps;
