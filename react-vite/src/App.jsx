import React from 'react';
import { string } from 'prop-types';

import './App.css';
import { List } from './statful/List';

/* -------------------------------------------------------------------------- */

export default function App(props) {
  
  const [appName, /* setAppName */] = React.useState(props.appName);

  // React.useEffect(() => {
  //   console.log(`changed app name: ${appName}`);
  //   const clearId = setInterval(() => setAppName((prevState) => prevState + `😃`), 3000);
  //   return () => clearInterval(clearId);

  // }, [appName]);

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
