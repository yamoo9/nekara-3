
// import logo from './logo.svg';
import React from 'react'

import './App.css';
import { List } from './statful/List'

// 상태가 없는 컴포넌트
// 상태를 가지는 컴포넌트로 변경
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'App'
    }
  }

  render() {
    return (
      <div className="App">
        {/* 상태를 가지는 컴포넌트 */}
        <h1>{this.state.name}</h1>
        <List />
      </div>
    );
  }
}

export default App;
