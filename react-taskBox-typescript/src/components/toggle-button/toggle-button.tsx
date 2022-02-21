import { css } from '@emotion/react';
import { SVGIcon } from '../svg-icon/svg-icon';
import { ToggleButtonProps, ILabels } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  open: false,
  size: 24,
  labels: {
    opened: '메뉴 닫기',
    closed: '메뉴 열기',
  },
};

export function ToggleButton({
  open,
  size,
  labels,
  onToggle,
  ...restProps
}: ToggleButtonProps): JSX.Element {
  
  const { opened, closed } = labels as ILabels;

  let buttonLabel = open ? opened : closed;
  let buttonSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <button
      type="button"
      title={buttonLabel}
      css={css`
        cursor: pointer;
        width: ${buttonSize};
        height: ${buttonSize};
        border: 0;
        padding: 0;
        background: none;
      `}
      onClick={onToggle}
      {...restProps}
    >
      <SVGIcon
        id={`toggleButton-${open ? 'opened' : 'closed'}`}
        label={buttonLabel}
        size={size}
      />
    </button>
  );
}

ToggleButton.defaultProps = defaultProps;
