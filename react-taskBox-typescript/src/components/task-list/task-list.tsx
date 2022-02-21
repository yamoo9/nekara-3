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
    <h3>문제가 발생했습니다!</h3>
    <p>
      신속히 문제를 찾아 해결하겠습니다.
      <br />
      불편을 드려 죄송합니다.
    </p>
  </div>
);

TaskList.Loading = () => (
  <div css={loadingStyle}>
    <SVGIcon id="taskList-empty" width={30} height={42} label="" />
    <h3>수행할 작업이 없습니다.</h3>
    <p>새로운 일을 시작해보는건 어때요? 😃</p>
  </div>
);
