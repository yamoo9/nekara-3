import React from 'react';
import { string } from 'prop-types';

import './App.css';
import { useState, useRef, useCallback } from 'react';
import { EuidInput } from './stateless/euidInput';
// import { List } from './statful/List';

/* -------------------------------------------------------------------------- */

export default function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 전송 차단
    console.log('폼 전송 전에 스크립트로 유효성 검사');
  };

  const handleFocusEmail = () => {
    emailRef.current.focus();
  };

  const handleFocusPassword = () => {
    passwordRef.current.focus();
  };

  // [고려할 점]
  // 컴포넌트 내부에 커스텀 React 컴포넌트를 사용할 때
  // 그 컴포넌트에 핸들러 prop을 전달할 때
  // 그 핸들러는 기억되어 있어야 불필요한 렌더링을 차단 할 수 있음
  // 불필요한 렌더링 차단을 위해 useCallback 훅을 사용합니다.
  const handleChange = useCallback((e, update) => {
    update(e.target.value);
  }, []);

  return (
    <div className="App" style={{ padding: 30 }}>
      <form onSubmit={handleSubmit}>
        <EuidInput
          id="email"
          forwardRef={emailRef}
          label="email"
          type="email"
          value={email}
          onChange={e => handleChange(e, setEmail)}
          inputProps={{
            placeholder: 'yamoo9@euid.dev',
          }}
        />
        <EuidInput
          forwardRef={passwordRef}
          id="password"
          label="password"
          type="password"
          value={password}
          onChange={e => handleChange(e, setPassword)}
          inputProps={{ placeholder: '숫자, 문자 조합 6자리 이상' }}
        />
        {/* <button type="submit">로그인</button> */}
        <button
          type="button"
          onClick={handleFocusEmail}
          style={{ marginRight: 6 }}
        >
          email 인풋에 초점 이동
        </button>
        <button type="button" onClick={handleFocusPassword}>
          password 인풋에 초점 이동
        </button>
      </form>
    </div>
  );
}

App.defaultProps = {
  appName: 'V App',
};

App.propTypes = {
  appName: string,
};
