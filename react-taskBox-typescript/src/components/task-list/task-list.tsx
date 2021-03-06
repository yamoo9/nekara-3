import { css } from '@emotion/react';
import { TaskItem, SVGIcon } from '@/components';
import { errorStyle, loadingStyle } from './task-list.styled';
import { TaskListProps, TaskItemProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  as: 'div',
  loading: false,
  error: false,
  items: [],
  visibleArchived: false,
};

export function TaskList({
  as: Component,
  loading,
  error,
  items,
  visibleArchived,
  ...restProps
}: TaskListProps): JSX.Element | null {
  
  if (loading) {
    items = Array(4).fill(null);
  }

  items = items as TaskItemProps[];

  if (!loading && items[0] !== null) {
    items = [
      ...items.filter((item) => item.pinned),
      ...items.filter((item) => !item.pinned),
    ];

    if (!visibleArchived) {
      items = items.filter((item) => !item.archived);
    }
  }

  if (!Component) {
    return null;
  }

  return (
    <Component
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 12px;
      `}
      {...restProps}
    >
      {error ? (
        <TaskList.Error />
      ) : items.length === 0 ? (
        <TaskList.Loading />
      ) : (
        items.map((item, index) => (
          <TaskItem
            key={item?.id ?? index}
            id={item?.id}
            loading={loading}
            pinned={item?.pinned}
            archived={item?.archived}
            headline={item?.headline}
            description={item?.description}
            avatar={
              item?.auther
                ? { src: item.auther.avatar, name: item.auther.name }
                : { src: '', name: '' }
            }
          />
        ))
      )}
    </Component>
  );
}


TaskList.defaultProps = defaultProps;

/* -------------------------------------------------------------------------- */

TaskList.Error = () => (
  <div role="alert" css={errorStyle}>
    <SVGIcon id="taskList-error" width={30} height={42} label="" />
    <h3>????????? ??????????????????!</h3>
    <p>
      ????????? ????????? ?????? ?????????????????????.
      <br />
      ????????? ?????? ???????????????.
    </p>
  </div>
);

TaskList.Loading = () => (
  <div css={loadingStyle}>
    <SVGIcon id="taskList-empty" width={30} height={42} label="" />
    <h3>????????? ????????? ????????????.</h3>
    <p>????????? ?????? ?????????????????? ?????????? ????</p>
  </div>
);
