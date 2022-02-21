import * as React from 'react';

export interface LogoProps {
  /** 렌더링 할 요소 타입 */
  as?: string | React.ComponentType | any;
  /** 로고 레이블 */
  label?: string;
  /** 로고 크기 */
  size?: number | string;
  /** 다크 모드 */
  dark?: boolean;
  /** 홈링크 모드 */
  homelink?: boolean;
};
