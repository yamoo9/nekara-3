import { css } from '@emotion/react';
import { Avatar, Checker, PinButton } from '@/components';
import { TaskItemProps } from '@/types';
import { Headline, Description } from './task-item.styled';
import { theme } from '@/styles/theme';
import { useTaskBox } from '@/contexts';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  as: 'div',
  loading: true,
  archived: false,
  pinned: false,
};

export function TaskItem({
  as: Component,
  id,
  loading,
  archived,
  pinned,
  headline,
  description,
  avatar,
  ...restProps
}: TaskItemProps): JSX.Element | null {

  const { updatePin, updateArchive } = useTaskBox();

  if (!Component) {
    return null;
  }

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
          src={avatar?.src}
          name={avatar?.name}
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
        onPin={() => updatePin?.(id)}
      />
      <Checker
        css={css`
          order: -1;
        `}
        loading={loading}
        checked={archived}
        label={
          archived
            ? '아카이브(보관) 비활성'
            : !archived
            ? '아카이브(보관) 활성'
            : '로딩 중...'
        }
        onChange={() => updateArchive?.(id)}
      />
    </Component>
  );
}

TaskItem.defaultProps = defaultProps;