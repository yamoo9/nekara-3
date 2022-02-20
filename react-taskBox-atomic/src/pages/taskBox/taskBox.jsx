import { css } from '@emotion/react';
import { useState, useEffect, useMemo } from 'react';
import { TaskBoxProvider } from '@/contexts';
import { LayoutBase } from '@/pages';
import { TaskList } from '@/components';

/* -------------------------------------------------------------------------- */

export default function TaskBox(props) {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await (await fetch('/api/taskList.json')).json();
        setItems(items);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /* ------------------------------------------------------------------------ */

  const [visibleArchived, setVisibleArchived] = useState(false);

  const headerProp = useMemo(
    () => ({
      open: visibleArchived,
      onToggle() {
        setVisibleArchived((prevState) => !prevState);
      },
      toggleButtonProps: {
        labels: {
          opened: '아카이브(보관)된 아이템 감춤',
          closed: '아카이브(보관)된 아이템 표시',
        },
      },
    }),
    [visibleArchived]
  );

  /* ------------------------------------------------------------------------ */

  const value = useMemo(
    () => ({
      updatePin(id) {
        setItems(
          items.map((item) => {
            if (item.id === id) item.pinned = !item.pinned;
            return item;
          })
        );
      },
      updateArchive(id) {
        setItems(
          items.map((item) => {
            if (item.id === id) item.archived = !item.archived;
            return item;
          })
        );
      },
    }),
    [items]
  );

  return (
    <TaskBoxProvider value={value}>
      <LayoutBase headerProps={headerProp} {...props}>
        <TaskList
          css={css`
            padding: 20px;
          `}
          loading={loading}
          error={error}
          items={items}
          visibleArchived={visibleArchived}
        />
      </LayoutBase>
    </TaskBoxProvider>
  );
}
