import { HeaderProps } from '@/types';

export interface LayoutBaseProps {
  /** Header 컴포넌트 props */
  headerProps?: HeaderProps;
  children?: JSX.Element | null;
};
