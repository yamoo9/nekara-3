import * as React from 'react';

// 컨텍스트 생성하기
export const DataContext = React.createContext();

// 컨텍스트 프로바이더(공급자) 래퍼 컴포넌트 내보내기
export const DataProvider = (props) => {
  return <DataContext.Provider {...props} />
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
