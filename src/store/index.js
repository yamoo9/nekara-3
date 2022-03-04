import { createStore } from 'redux';

/* -------------------------------------------------------------------------- */
/* INITIAL STATE                                                              */
/* -------------------------------------------------------------------------- */
const preloadedState = {
  theme: {
    mode: 'light',
    color: '#111',
    background: '#fff',
  },
  auth: {
    user: null,
    permission: '',
  },
  cart: [],
  comments: [],
};

/* -------------------------------------------------------------------------- */
/* ACTIONS                                                                    */
/* -------------------------------------------------------------------------- */

// ACTION TYPES
const SET_THEME = 'theme/changed';

// ACTION CREATORS (function: creating action object)
const setTheme = (newTheme) => {
  return {
    type: SET_THEME,
    payload: newTheme,
  };
};

/* -------------------------------------------------------------------------- */
/* REDUCDER                                                                   */
/* -------------------------------------------------------------------------- */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

/* -------------------------------------------------------------------------- */
/* STORE                                                                      */
/* -------------------------------------------------------------------------- */
// { #state, getState, dispatch, subscribe }
const store = createStore(reducer, preloadedState);

function view() {
  // 테마 상태 읽어와서
  const { theme } = store.getState();

  // 결과를 다시 반환
  const themeContainer = document.createElement('div');

  themeContainer.style.cssText = `
    color: ${theme.color};
    background: ${theme.background};
  `;

  themeContainer.textContent = theme.mode;

  console.log(themeContainer.outerHTML);

  return themeContainer;
}

// console.log('preloaded: ', store.getState());

// 최초 마운트
view();

// 상태 업데이트 → UI 리 렌더링
// 스토어 구독
const unsubscribe = store.subscribe(view);

// console.log('updated: ', store.getState());

const lightTheme = {
  mode: 'light',
  color: '#111',
  background: '#fff',
};

const darkTheme = {
  mode: 'dark',
  color: '#fff',
  background: '#000',
};

setInterval(() => {
  const { theme } = store.getState();
  store.dispatch(
    setTheme(theme.mode.includes('dark') ? lightTheme : darkTheme)
  );

  unsubscribe();
}, 2000);
