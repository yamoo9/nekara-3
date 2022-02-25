// Context API
// HOC, render props 패턴 (컴포넌트 로직, 상태 공유)
// useReducer Hook (2019~)
// Authentication (인증) 상태 관리
// 컨텍스트 내에 포함된 컴포넌트 사이 상태 공유/관리

import { createContext, useReducer, useMemo, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

// 쿠키의 키(key) 값 (상수)
const AUTH_COOKIE = 'AUTH_COOKIE';

// 컨텍스트 생성
const AuthContext = createContext();

// 상태 설계
// React Hook - useReducer(reducer, initialState[, initialization])
// - currentUser → 현재 인증된 사용자 정보 
// - permission → 권한 (읽기/쓰기/수정/삭제 등)
// - signIn → 입력받은 계정 정보 : (로그인) 인증 처리 메서드
// - signOut → 인증된 사용자를 해제 : (로그아웃) 인증 해제 메서드

// 상태 유지
// 로그인 후, 파기(날짜, 사용자 상호작용 등) 되기 전까지는 상태가 유지되어야 한다.
// - localStorage
// - Cookies (js-cookie)

// 초기 상태 값
const initialState = {
  currentUser: null,
  permission: '', // 'member' | 'admin'
};

// 문제 발생할 가능성 줄이기 위해 액션 타입 정의
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

// 리듀서 함수 (순수 함수: 상태(input) → 새로운 상태(output))
const reducer = (state, action) => {
  // action { type[, payload] }
  if (action.type === SIGN_IN) {
    // 상태의 불변성 유지
    return {
      ...state,
      ...action.payload
    }
  }
  
  if (action.type === SIGN_OUT) {
    return initialState;
  }
  
  return state;
}

// 지연된 초기화 → 초기 상태 설정
const lazyInit = () => {
  // 저장된 쿠키 값을 가져온다.
  const authCookie = Cookies.get(AUTH_COOKIE);

  // 반환할 초기 상태 값
  let returnValue = {};

  // 저장된 쿠키 값이 있다면?
  if (authCookie) {
    returnValue = JSON.parse(authCookie);
  }

  // 처리 후에 값을 반환
  return { 
    ...initialState,
    ...returnValue,
  };
}


// 생성된 컨텍스트 값 공급자(provider)
export const AuthProvider = (props) => {

  const [{ currentUser, permission }, dispatch] = useReducer(reducer, initialState, lazyInit);

  useEffect(() => {

    if (currentUser) {
      Cookies.set(AUTH_COOKIE, JSON.stringify({currentUser, permission}), { expires: 1 });
    } else {
      Cookies.remove(AUTH_COOKIE);
    }

  }, [currentUser, permission]);

  // ------------------------------------------------------------------------------------------

  const signIn = (currentUser, permission = 'member') => 
    dispatch({
      type: SIGN_IN,
      payload: {
        currentUser,
        permission
      }
    });

  const signOut = () => dispatch({
    type: SIGN_OUT
  });

  const value = useMemo(() => ({
    currentUser, 
    permission,
    signIn,
    signOut
  }), [currentUser, permission]);

  return <AuthContext.Provider value={value} {...props} />
}

// useContext 훅 활용 → 사용자 정의 훅 생성(작성)
export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if(!contextValue) {
    throw new Error('useAuth 커스텀 훅은 Auth Context 내부에서만 사용 가능합니다.');
  }
  return contextValue;
};


// 고차 컴포넌트 (HOC)
// 불필요한 추상 레이어 추가