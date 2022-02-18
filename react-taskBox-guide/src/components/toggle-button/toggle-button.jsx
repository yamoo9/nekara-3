import { css } from '@emotion/react';
import { bool, number, oneOfType, string } from 'prop-types';
import { SVGIcon } from '../svgicon/svgicon';

/* -------------------------------------------------------------------------- */

export function ToggleButton({ open, size, ...restProps }) {
  let buttonLabel = open ? '메뉴 닫기' : '메뉴 열기';
  return (
    <button type="button" {...restProps} title={buttonLabel} css={css`
      cursor: pointer;
      width: 24px;
      height: 24px;
      border: 0;
      padding: 0;
      background: none;
    `}>
      <SVGIcon
        id={`toggleButton-${open ? 'openned' : 'closed'}`}
        label={buttonLabel}
        size={size}
      />
    </button>
  );
}

ToggleButton.defaultProps = {
  open: false,
  size: 24
};

ToggleButton.propTypes = {
  /** 메뉴 열림/닫힘 상태 */
  open: bool,
  /** 버튼 크기 */
  size: oneOfType([number, string]),
};
