import { bool, exact, func } from 'prop-types';
import { Logo, ToggleButton } from '@/components';
import { headerStyle } from './header.styled';

/* -------------------------------------------------------------------------- */

export function Header({ open, onToggle, logoProps, toggleButtonProps, ...restProps }) {

  return (
    <header css={headerStyle} {...restProps}>
      <Logo homelink {...logoProps} />
      <ToggleButton open={open} onClick={onToggle} {...toggleButtonProps} />
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
  /** 로고 props */
  logoProps: exact(Logo.propTypes),
  /** 토글 버튼 props */
  toggleButtonProps: exact(ToggleButton.propTypes),
};
