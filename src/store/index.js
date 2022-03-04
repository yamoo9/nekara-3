import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

// REDUX 사용하는 이유가 복잡한 상태 관리
// 모든 컴포넌트가 공유하는 상태

/* -------------------------------------------------------------------------- */
/* STORE                                                                      */
/* -------------------------------------------------------------------------- */

// redux createStore 대신에 RTK의 configureStore 사용
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
