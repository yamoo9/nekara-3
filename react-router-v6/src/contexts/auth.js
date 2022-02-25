// Context API
// HOC, render props 패턴 (컴포넌트 로직, 상태 공유)
// useReducer Hook (2019~)
// Authentication (인증) 상태 관리
// 컨텍스트 내에 포함된 컴포넌트 사이 상태 공유/관리

import { createContext, useReducer, useMemo, useContext } from 'react';


// 컨텍스트 생성
const AuthContext = createContext();

// 상태 설계
// React Hook - useReducer(reducer, initialState[, initialization])
// - currentUser → 현재 인증된 사용자 정보 
// - permission → 권한 (읽기/쓰기/수정/삭제 등)
// - signIn → 입력받은 계정 정보 : (로그인) 인증 처리 메서드
// - signOut → 인증된 사용자를 해제 : (로그아웃) 인증 해제 메서드

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


// 생성된 컨텍스트 값 공급자(provider)
export const AuthProvider = (props) => {

  const [{ currentUser, permission }, dispatch] = useReducer(reducer, initialState);

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