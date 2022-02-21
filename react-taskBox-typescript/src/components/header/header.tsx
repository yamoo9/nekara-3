import { Logo, ToggleButton } from '@/components';
import { headerStyle } from './header.styled';
import { HeaderProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  open: false,
};

export function Header({
  open,
  onToggle,
  logoProps,
  toggleButtonProps,
  ...restProps
}: HeaderProps): JSX.Element {
  return (
    <header css={headerStyle} {...restProps}>
      <Logo homelink {...logoProps} />
      <ToggleButton open={open} onToggle={onToggle} {...toggleButtonProps} />
    </header>
  );
}

Header.defaultProps = defaultProps;
