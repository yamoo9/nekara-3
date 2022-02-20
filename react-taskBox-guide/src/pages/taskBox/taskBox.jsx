import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
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

  

  return (
    <LayoutBase {...props}>
      <TaskList
        css={css`
          padding: 20px;
        `}
        loading={loading}
        error={error}
        items={items}
      />
    </LayoutBase>
  );
}
