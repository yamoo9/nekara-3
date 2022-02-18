import React from 'react';
import { string } from 'prop-types';

import './App.css';
import { List } from './statful/List';

/* -------------------------------------------------------------------------- */

export default function App(props) {
  
  // 1. tuple data type [state, setState]
  // 2. intial value (lazy intial value)
  const [appName, setAppName] = React.useState(props.appName);

  // 1. side effect function (subscription)
  // 2. dependency array (condition)
  // 3. cleanup (unsubscription)
  React.useEffect(() => {
    console.log(`changed app name: ${appName}`);

    // 사이드 이펙트 설정
    // 타임 컨트롤 (React에 의해 관리되는 것이 아님 : 부수 효과)
    const clearId = setInterval(() => setAppName((prevState) => prevState + `😃`), 3000);

    return /* cleanup */ () => {
      clearInterval(clearId);
    }

  }, [appName]);

  return (
    <div className="App">
      <h1>{appName}</h1>
      <List />
    </div>
  );
}

App.defaultProps = {
  appName: 'V App',
};

App.propTypes = {
  appName: string,
};
