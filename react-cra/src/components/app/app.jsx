// import logo from 'assets/logo.svg';
import './app.css';
import { A11yHidden, HomeLink, Button, Box } from 'components';

export default function App() {
  return (
    <div className="App">
      {/* JSX에서 style prop에 값을 설정할 때는 반드시 객체로! */}
      {/* @emotion/react 패키지에서 css prop를 사용하면 쉬워져요! */}
      <HomeLink style={{ margin: '3rem' }} />

      <Box
        as="article"
        role="group"
        aria-labelledby="labelOfArticle"
        className="buttonGroup"
        my={30}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <A11yHidden as="h2" id="labelOfArticle">로그인 버튼 그룹</A11yHidden>
        <Button primary>로그인</Button>
        <Button to="https://euid.dev" secondary noBorder>회원가입</Button>
      </Box>

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
