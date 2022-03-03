import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useEffect,
} from 'react';

import netlifyIdentity from 'netlify-identity-widget';

const storage = sessionStorage; // 또는 localStorage

const AUTH_KEY = 'AUTHENTICATION';

const AuthContext = createContext();

const initialState = {
  currentUser: null,
  permission: '',
};

const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

const reducer = (state, action) => {
  if (action.type === SIGN_IN) {
    return {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === SIGN_OUT) {
    return initialState;
  }
  return state;
};

const lazyInit = () => {
  const authCookie = storage.getItem(AUTH_KEY);

  return {
    ...initialState,
    ...(authCookie ? JSON.parse(authCookie) : {}),
  };
};

export const AuthProvider = (props) => {
  const [{ currentUser, permission }, dispatch] = useReducer(
    reducer,
    initialState,
    lazyInit
  );

  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on('login', (user) => {
      dispatch({
        type: SIGN_IN,
        payload: {
          currentUser: user,
          permission: user.app_metadata.roles[0],
        },
      });
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      dispatch({
        type: SIGN_OUT,
      });
    });

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, [permission]);

  useEffect(() => {
    if (currentUser) {
      storage.setItem(AUTH_KEY, JSON.stringify({ currentUser, permission }));
    } else {
      storage.removeItem(AUTH_KEY);
    }
  }, [currentUser, permission]);

  // ------------------------------------------------------------------------------------------

  const signIn = () => {
    netlifyIdentity.open('login');
  };

  const signOut = () => {
    netlifyIdentity.logout();
  };

  const value = useMemo(
    () => ({
      currentUser,
      permission,
      signIn,
      signOut,
    }),
    [currentUser, permission]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error(
      'useAuth 커스텀 훅은 Auth Context 내부에서만 사용 가능합니다.'
    );
  }
  return contextValue;
};
