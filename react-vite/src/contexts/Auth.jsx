import React from 'react';
import { element, oneOf, oneOfType, string } from 'prop-types';

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const signIn = React.useCallback((signInedUser) => {
    setCurrentUser(signInedUser);
    setIsAuthorized(true);
  }, []);

  const signOut = React.useCallback(() => {
    setCurrentUser(null);
    setIsAuthorized(false);
  }, []);

  const value = React.useMemo(
    () => ({
      auth: {
        isAuthorized,
        currentUser,
      },
      signIn,
      signOut,
    }),
    [currentUser, isAuthorized, signIn, signOut]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

AuthProvider.propTypes = {
  children: oneOfType([string, oneOf([null]), element]), // optional
};

export function useAuth() {
  const authUser = React.useContext(AuthContext);
  if (!authUser) {
    throw new Error('ERROR....');
  }
  return React.useMemo(() => authUser, [authUser]);
}
