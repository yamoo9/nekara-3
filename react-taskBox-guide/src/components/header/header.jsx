import { bool, func } from 'prop-types';
import { Logo, ToggleButton } from '@/components';
import { headerStyle } from './header.styled';

/* -------------------------------------------------------------------------- */

export function Header({ open, onToggle, ...restProps }) {
  return (
    <header css={headerStyle} {...restProps}>
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
  onToggle: func,
};
