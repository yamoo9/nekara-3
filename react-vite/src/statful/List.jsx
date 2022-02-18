import React, { useState, useEffect, useRef } from 'react';
import { Item } from '../stateless/Item';

/* -------------------------------------------------------------------------- */

export const List = () => {

  // ref 생성
  const listRef = useRef(null); // { current: null }

  useEffect(() => {
    // ref 참조 값 확인
    console.log(listRef.current); // null → <ul></ul>

    listRef.current.style.background = 'red';

  }, [listRef]);
  
  const [count, setCount] = useState(100);
  
  
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('/api/taskList.json');
        const json = await response.json();
        setDataList(json);
      } catch (error) {
        setError({ message: error.message })
      }
    }

    fetchData();
    
  }, []);


  if (error) {
    return <div role="alert">{error.message}</div>
  }

  return (
    <>
      <output style={{display: 'block'}}>{count}</output>
      <button type="button" onMouseEnter={() => setCount(count + 10)}>
        clicked update count
      </button>
      {/* ref callback */}
      <ul ref={listRef}>
      {/* <ul ref={(domNode) => {
        listRef.current = domNode // <ul></ul>
      }}> */}
        {dataList.map(({ id, content }) => (
          <Item as="li" key={id}>
            {content}
          </Item>
        ))}
      </ul>
    </>
  );
};
