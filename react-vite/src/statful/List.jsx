import './List.css';
import React, { useState, useEffect, useRef } from 'react';
import { Item } from '../stateless/Item';
import $ from 'jquery';

/* -------------------------------------------------------------------------- */

export const List = () => {
  /* -------------------------------------------------------------------------- */

  // ref 생성
  // const listRef = useRef(null); // { current: null }

  // useEffect(() => {
  //   // ref 참조 값 확인
  //   console.log(listRef.current); // null → <ul></ul>

  //   listRef.current.style.background = 'red';

  // }, [listRef]);

  /* -------------------------------------------------------------------------- */

  const animateRef = useRef(null);

  useEffect(() => {
    // 명령형 프로그래밍
    // 써드 파티 라이브러리 활용 (애니메이션)
    // ref 사용해야 할 때
    const $list = $(animateRef.current);

    $list
      .animate(
        // in(from) → out(to)
        {
          opacity: 0.25,
          left: '+=50',
          height: 'toggle' // 1 → 0
        },
        1000,
        () => {
          console.log('complete animation');
          $list.remove();
        }
      );
  }, []);

  /* -------------------------------------------------------------------------- */

  const [count, setCount] = useState(100);

  /* -------------------------------------------------------------------------- */

  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/taskList.json');
        const json = await response.json();
        setDataList(json);
      } catch (error) {
        setError({ message: error.message });
      }
    }

    fetchData();
  }, []);

  /* -------------------------------------------------------------------------- */

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <>
      <output style={{ display: 'block' }}>{count}</output>
      <button type="button" onMouseEnter={() => setCount(count + 10)}>
        clicked update count
      </button>
      <ul ref={animateRef}>
        {dataList.map(({ id, content }) => (
          <Item as="li" key={id}>
            {content}
          </Item>
        ))}
      </ul>
    </>
  );
};
