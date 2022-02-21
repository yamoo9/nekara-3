import { TaskItemProps } from '@/types';

export interface TaskListProps {
  /** 렌더링 할 요소 타입 */
  as?: string | React.ComponentType<any>;
  /** 로딩 상태 */
  loading?: boolean;
  /** 오류 상태 */
  error?: boolean;
  /** 렌더링 할 아이템 리스트(배열) */
  items?: TaskItemProps[];
  /** 아카이브 된 아이템 표시 설정 */
  visibleArchived?: boolean;
};