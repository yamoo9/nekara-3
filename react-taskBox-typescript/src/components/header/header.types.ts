import { LogoProps, ToggleButtonProps } from '@/types';

export interface HeaderProps { 
  /** 메뉴 열림/닫힘 상태 */
  open?: boolean;
  /** 메뉴 열림/닫힘 처리 이벤트 핸들러 */
  onToggle?: () => void;
  /** Logo 컴포넌트 props */
  logoProps?: LogoProps;
  /** ToggleButton 컴포넌트 props */
  toggleButtonProps?: ToggleButtonProps;
}