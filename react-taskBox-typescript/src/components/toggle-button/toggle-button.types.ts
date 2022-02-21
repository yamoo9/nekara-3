export interface ILabels {
  opened?: string;
  closed?: string;
}

export interface ToggleButtonProps {
  /** 메뉴 열림/닫힘 상태 */
  open?: boolean;
  /** 버튼 크기 */
  size?: number | string;
  /** 버튼 레이블 */
  labels?: ILabels;
  /** 토글 이벤트 핸들러 */
  onToggle?: () => void;
}
