import { bool, func } from 'prop-types';
import { css } from '@emotion/react';
import { Logo, ToggleButton } from '@/components';
import { theme } from '@/styles/theme';

const { colors, boxShadow } = theme;

export function Header({ open, onToggle, ...restProps }) {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: ${colors.White};
        box-shadow: ${boxShadow.Shadow[100]};
      `}
      {...restProps}
    >
      <Logo homelink />
      <ToggleButton open={open} onClick={onToggle} />
    </header>
  );
}

Header.defaultProps = {
  open: false,
};

Header.propTypes = {
  /** 메뉴 열림/닫힘 상태 */
  open: bool,
  /** 메뉴 열림/닫힘 처리 이벤트 핸들러 */
  onToggle: func
};
