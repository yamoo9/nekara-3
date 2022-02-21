import { AvatarProps } from '@/types'

export interface TaskItemProps {
  /** 렌더링 할 요소 타입 */
  as?: string | React.ComponentType;
  /** 아이템 ID */
  id: string;
  /** 로딩 상태 */
  loading?: boolean;
  /** 아카이브(보관) 상태 설정 */
  archived?: boolean;
  /** 핀(고정) 상태 설정 */
  pinned?: boolean;
  /** 아이템 헤드라인(제목) */
  headline?: string;
  /** 아이템 디스크립션(설명) */
  description?: string;
  /** 아바타 정보(소스, 이름) */
  avatar?: AvatarProps;
  auther?: {
    avatar: string;
    name: string;
  }
};

export interface TaskItemHeadlineProps {
  $loading?: boolean;
}

export interface TaskItemDescriptionProps {
  $loading?: boolean;
}