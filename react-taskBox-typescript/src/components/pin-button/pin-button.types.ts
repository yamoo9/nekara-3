export interface PinButtonProps {
  /** 로딩 상태 */
  loading?: boolean;
  /** 버튼 타입 */
  type?: 'loading' | 'deactive' | 'active';
  /** 버튼 크기 */
  size?: number;
  /** 핀 이벤트 핸들러 */
  onPin?: () => void;
};
