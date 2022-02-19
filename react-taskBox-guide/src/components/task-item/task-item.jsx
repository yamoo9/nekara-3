import { css } from '@emotion/react';
import { bool, elementType, oneOfType, shape, string } from 'prop-types';
import { Avatar, AvatarType, Checker, PinButton } from '@/components';
import { Headline, Description } from './task-item.styled';
import { theme } from '@/styles/theme';

/* -------------------------------------------------------------------------- */

export const TaskItemType = {
  /** 렌더링 할 요소 타입 */
  as: oneOfType([string, elementType]),
  /** 로딩 상태 */
  loading: bool,
  /** 아카이브(보관) 상태 설정 */
  archived: bool,
  /** 핀(고정) 상태 설정 */
  pinned: bool,
  /** 아이템 헤드라인(제목) */
  headline: string.isRequired,
  /** 아이템 디스크립션(설명) */
  description: string.isRequired,
  /** 아바타 정보(소스, 이름) */
  avatar: AvatarType.isRequired,
};

/* -------------------------------------------------------------------------- */

export function TaskItem({
  as: Component,
  loading,
  archived,
  pinned,
  headline,
  description,
  avatar,
  ...restProps
}) {
  return (
    <Component
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 8px;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 16px;
        background: ${theme.colors.White};
        box-shadow: ${theme.boxShadow.Shadow[100]};
      `}
      {...restProps}
    >
      <div
        css={css`
          flex: 1;
          order: 0;
        `}
      >
        <Headline $loading={loading}>{headline}</Headline>
        <Description $loading={loading}>{description}</Description>
        <Avatar
          loading={loading}
          src={avatar.src}
          name={avatar.name}
          css={css`
            margin-top: 16px;
          `}
        />
      </div>
      <PinButton
        css={css`
          order: 1;
          margin-top: -4px;
        `}
        loading={loading}
        type={pinned ? 'active' : !pinned ? 'deactive' : 'loading'}
      />
      <Checker
        css={css`
          order: -1;
        `}
        loading={loading}
        checked={archived}
        label={
          archived
            ? '아카이브(보관) 활성'
            : !archived
            ? '아카이브(보관) 비활성'
            : '로딩 중...'
        }
      />
    </Component>
  );
}

TaskItem.defaultProps = {
  as: 'div',
  loading: true,
  archived: false,
  pinned: false,
};

TaskItem.propTypes = TaskItemType;
