import { createContext, useReducer, useMemo, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const authCookie = 'authCookie';

const AuthContext = createContext();

const initialAuthState = {
  user: null,
  isAuth: false,
  permission: '', // 'admin' | 'member'
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        permission: action.payload.permission,
      };
    case 'SIGN_OUT':
      return initialAuthState;
    default:
      return state;
  }
};

const initialization = () => {
  const cookieSigned = Cookies.get(authCookie);

  let userInfo = null;

  if (cookieSigned) {
    userInfo = JSON.parse(cookieSigned);
  }
  
  return {
    ...initialAuthState,
    user: userInfo?.user ?? null,
    isAuth: userInfo?.isAuth ?? false,
    permission: userInfo?.permission ?? ''
  }
}

export const AuthProvider = (props) => {

  const [{ user, permission, isAuth }, dispatch] = useReducer(
    authReducer,
    initialAuthState,
    initialization
  );

  useEffect(() => {
    if (isAuth) {
      Cookies.set(authCookie, JSON.stringify({
        user,
        isAuth,
        permission
      }), { expires: 1 });
    } else {
      Cookies.remove(authCookie);
    }
  }, [user, isAuth, permission]);

  const signIn = (user, permission = 'member') => 
    dispatch({
      type: 'SIGN_IN',
      payload: {
        user,
        permission,
      },
    });

  const signOut = () => dispatch({ type: 'SIGN_OUT' });

  let value = useMemo(
    () => ({
      user,
      permission,
      signIn,
      signOut,
    }),
    [permission, user]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth 커스텀 훅은 AuthContext 안에서 사용 가능합니다.');
  }

  return context;
};
