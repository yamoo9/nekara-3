import React from 'react';
import {
  arrayOf,
  bool,
  elementType,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import { css } from '@emotion/react';
import { TaskItem } from '@/components';

/* -------------------------------------------------------------------------- */

export function TaskList({
  as: Component,
  loading,
  items,
  visibleArchived,
  ...restProps
}) {
  if (!loading && items[0] !== null) {
    items = [
      ...items.filter((item) => item.pinned),
      ...items.filter((item) => !item.pinned),
    ];

    if (!visibleArchived) {
      items = items.filter((item) => !item.archived);
    }
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
    >
      {items &&
        items.map((item, index) => (
          <TaskItem
            key={item?.id ?? index}
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
        ))}
    </Component>
  );
}

TaskList.defaultProps = {
  as: 'div',
  loading: true,
  items: [null, null, null, null],
  visibleArchived: false,
};

TaskList.propTypes = {
  /** 렌더링 할 요소 타입 */
  as: oneOfType([string, elementType]),
  /** 로딩 상태 */
  loading: bool,
  /** 렌더링 할 아이템 리스트(배열) */
  items: arrayOf(oneOfType([oneOf([null]), TaskItem.propTypes])),
  /** 아카이브 된 아이템 표시 설정 */
  visibleArchived: bool,
};
