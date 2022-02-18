import { useState, useEffect } from 'react';
import { Item } from '../stateless/Item';

// useState API
// 1. 2. 3.

export const List = () => {
  // 컴포넌트 내부가 아닌,
  // 외부에서 상태로 사용할 데이터 로드
  const [dataList, setDataList] = useState([]);

  // dataList 상태를 관리하는 사이드 이펙트 처리 함수
  useEffect(() => {
    // console.log('dataList 관리')
  }, [dataList]);

  /* -------------------------------------------------------------------------- */

  const [count, setCount] = useState(100);

  
  useEffect(
    () => {
      // console.log('count 관리')
    }, 
    [count]
  );

  /* -------------------------------------------------------------------------- */

  // count 상태를 관리하는 사이드 이펙트 처리 함수 

  // 함수 몸체에서 네트워크 통신을 하려면?
  // React의 모든 (함수) 컴포넌트는 순수 함수이다.
  // 그러므로 순수성을 유지하려면 사이드 이펙트를 함수 몸체에 바로 작성해서는 안된다.
  // 함수 몸체 안에서 사이드 이펙트를 처리할 수 있을까요?
  // React 훅 중에 이펙트 이름을 가진 것을 활용

  const [error, setError] = useState(null);

  // 이펙트 훅(함수)의 중요한 3가지
  // 1. 함수 컴포넌트 안에서 사이드 이펙트를 처리하는 구간(콜백)
  // 2. 조건문이나, 식을 통해 사이드 이펙트를 관리하는 것이 아니다. 조건을 처리하기 위한 종속성 배열 제공

  // 네트워크 통신 (비동기 요청) => 응답 -> UI 렌더링
  // Fetch API
  useEffect(() => {
    fetch('/api/taskList.json')
      .then(response => response.json())
      .then(json => setDataList(json))
      .catch(({message}) => setError({ message }))
  }, []);

  if (error) {
    return <div role="alert">{error.message}</div>
  }

  // 상태를 가지는 컴포넌트가
  // 상태를 가지지 않는 컴포넌트를 리스트 렌더링
  // key 값이 중요!
  return (
    <>
      <output style={{display: 'block'}}>{count}</output>
      <button type="button" onMouseEnter={() => setCount(count + 10)}>
        clicked update count
      </button>
      <ul>
        {dataList.map(({ id, content }) => (
          <Item as="li" key={id}>
            {content}
          </Item>
        ))}
      </ul>
    </>
  );
};
