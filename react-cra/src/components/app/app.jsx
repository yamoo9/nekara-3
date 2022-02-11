// import logo from 'assets/logo.svg';
import './app.css';
import { HomeLink, Button } from 'components';

export default function App() {
  return (
    <div className="App">
      {/* JSX에서 style prop에 값을 설정할 때는 반드시 객체로! */}
      {/* @emotion/react 패키지에서 css prop를 사용하면 쉬워져요! */}
      <HomeLink style={{ margin: '3rem' }} />

      <div
        style={{
          display: 'flex',
          // flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <Button primary>버튼</Button>
        <Button to="https://euid.dev" secondary noBorder>이듬</Button>
      </div>

      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="React" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}
