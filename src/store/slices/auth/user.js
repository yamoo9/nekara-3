// action types
const AUTH_LOGIN = 'auth/login';
const AUTH_LOGOUT = 'auth/logout';

// action creators
export const authLogin = (authUser) => ({
  type: AUTH_LOGIN,
  payload: authUser,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

// inital state
const initialState = null;

// reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        ...payload,
      };
    case AUTH_LOGOUT:
    default:
      return initialState;
  }
}
