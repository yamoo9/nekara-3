import * as React from 'react';
import { useData } from './context';

// React의 useContext를 사용해서 Context.Provider가 공급하는 value 가져오기

export default function Child({ children, ...restProps }) {
  
  const contextValue = useData();

  console.log(contextValue);

  return (
    <div className="child" {...restProps}>
      {children}
    </div>
  );
}

// export default withData(PureChild);