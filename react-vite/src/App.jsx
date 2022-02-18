import React from 'react';
import { string } from 'prop-types';

import './App.css';
import { useState, useRef } from 'react';
import { EuidInput } from './stateless/euidInput';
// import { List } from './statful/List';

/* -------------------------------------------------------------------------- */

export default function App() {
  // DOM 노드 참조를 위한 Ref 생성
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 상태 선언
  // useState는 객체 데이터 형태를 관리하기에 적합하지 않다.
  // useReducer 사용해서 객체 형태의 상태를 관리하는 것이 좋다.
  // const [formState, setFormState] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 전송 차단
    console.log('폼 전송 전에 스크립트로 유효성 검사');
  };

  const handleFocusEmail = () => {
    // 이메일 인풋에 초점 이동
    emailRef.current.focus();
  };

  const handleFocusPassword = () => {
    // 패스워드 인풋에 초점 이동
    passwordRef.current.focus();
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <form onSubmit={handleSubmit}>
        <EuidInput
          id="email"
          forwardRef={emailRef}
          label="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
