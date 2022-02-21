export type iconTypes = 
  'checker-loading'|
  'checker-checked'|
  'checker-unchecked'|
  'pin-loading'|
  'pin-active'|
  'pin-deactive'|
  'logo-dark'|
  'logo-light'|
  'toggleButton-closed'|
  'toggleButton-opened'|
  'taskList-empty'|
  'taskList-error';

export interface SVGIconProps {
  /** 아이콘 ID */
  id: iconTypes;
  /** 아이콘 레이블 (의미를 가질 경우 설정) */
  label?: string;
  /** 아이콘 너비, 높이 일괄 설정 */
  size?: number | string;
  /** 아이콘 너비 설정 */
  width?: number | string;
  /** 아이콘 높이 설정 */
  height?: number | string;
};
