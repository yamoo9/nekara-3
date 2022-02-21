export interface CheckerProps {
  /** Checker 컴포넌트 레이블 */
  label: string;
  /** Checker 컴포넌트의 체크 상태 */
  checked?: boolean;
  /** Checker 컴포넌트의 로딩 상태 */
  loading?: boolean;
  /** Checker 컴포넌트의 크기(너버, 높이) */
  size?: number | string;
  /** Checker 컴포넌트의 체크 상태를 변경할 이벤트 핸들러 */
  onChange(): void;

  [key: string]: any;
}

export interface CheckerWrapperProps {
  $size?: number | string;
  $loading?: boolean;
  checked?: boolean;
}
