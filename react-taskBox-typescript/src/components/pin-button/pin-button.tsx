import { css } from '@emotion/react';
import { SVGIcon } from '@/components';
import { PinButtonProps, iconTypes } from '@/types';

/* -------------------------------------------------------------------------- */

const getLabel = (type: string): string => {
  switch (type) {
    case 'active':
      return '핀(고정) 비활성';
    case 'deactive':
      return '핀(고정) 활성';
    default:
      return '로딩 중...';
  }
};

/* -------------------------------------------------------------------------- */

const defaultProps = {
  loading: true,
  type: 'loading',
  size: 24,
};

export function PinButton({
  loading,
  type,
  size,
  onPin,
  ...restProps
}: PinButtonProps): JSX.Element {

  let typeLabel = getLabel(type as string);
  let iconId = `pin-${loading ? 'loading' : type}` as iconTypes;

  return (
    <button
      type="button"
      css={css`
        cursor: pointer;
        border: 0;
        background: none;
        width: ${size}px;
        height: ${size}px;
        padding: 0;
      `}
      title={typeLabel}
      onClick={onPin}
      {...restProps}
    >
      <SVGIcon id={iconId} label={typeLabel} />
    </button>
  );
}

PinButton.defaultProps = defaultProps;