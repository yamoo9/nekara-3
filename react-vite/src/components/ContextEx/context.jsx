import * as React from 'react';
import { any } from 'prop-types';

// 컨텍스트 생성하기
export const DataContext = React.createContext();

// 컨텍스트 프로바이더(공급자) 래퍼 컴포넌트 내보내기
export const DataProvider = (props) => {
  return <DataContext.Provider {...props} />
}

// value prop을 전달하지 않을 경우 출력되는 오류 메시지
// Warning: Failed prop type: The prop `value` is marked as required in `DataProvider`, but its value is `undefined`.
DataProvider.propTypes = {
  value: any.isRequired,
}

// 컨텍스트 값을 공급하는 고차 컴포넌트 내보내기
export function withData(Component) {
  // 내보내질 컴포넌트
  return function DataHOC(props) {
    return (
      <DataContext.Consumer>
        {
          (value) => {
            return <Component context={value} {...props} />
          }
        }
      </DataContext.Consumer>
    )
  }
}

// 컨텍스트 값을 공급하는 사용자 정의 훅 내보내기
// custom hook (조금 특별한 함수에 불과)
// use* 시작하는 함수 이름은 React 세계관에서는 훅이다.
export function useData() {
  // 컨텍스트의 값을 반환
  // 커스텀 훅은 React에서 공식적으로 제공하는 훅을 사용할 수 있다.
  const contextValue = React.useContext(DataContext);

  if (!contextValue) {
    throw new Error('useData 훅은 DataContext 안에서만 사용 가능합니다. 문제가 있으니 확인 바랍니다.');
  }

  return contextValue;
}
