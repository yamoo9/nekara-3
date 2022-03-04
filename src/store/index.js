import { createStore } from 'redux';
import rootReducer from './reducers';

// REDUX 사용하는 이유가 복잡한 상태 관리
// 모든 컴포넌트가 공유하는 상태

/* -------------------------------------------------------------------------- */
/* STORE                                                                      */
/* -------------------------------------------------------------------------- */
// { #state, getState, dispatch, subscribe }
export const store = createStore(rootReducer);
