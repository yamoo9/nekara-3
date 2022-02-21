import { memo } from 'react';

function PureButton({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}

export const Button = memo(PureButton);