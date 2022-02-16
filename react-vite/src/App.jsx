import { useState, createElement as h } from 'react';
import logo from './logo.svg';
import './App.css';

const Div = (props) => <div {...props} />

function App() {
  // React Hooks
  // 상태 관리 훅
  // [useState], useReducer

  // App 컴포넌트가 관리하는 상태(state)
  const [nums] = useState(Array(100).fill(null).map((n, i) => ({
    id: `fdkjfs-${i}`,
    content: i * i
  })));
  
  return (
    <div className="App">
      {
        // App 컴포넌트의 children [VDOMNode, null, string]
        // React 컴포넌트의 자식 노드로 객체가 설정될 수 있을까?
        nums.map(({ id, content }, idx) => {
          return (
            <Div key={id} children={content} />
          )
        })
      }
    </div>
  );
}

export default App;
