import React from 'react';
import { any, element, oneOf, oneOfType, string } from 'prop-types';

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  return <AuthContext.Provider {...props} />;
};

AuthProvider.propTypes = {
  value: any.isRequired, // required
  children: oneOfType([string, oneOf([null]), element]), // optional
};

export function useAuth() {
  const authUser = React.useContext(AuthContext);
  if (!authUser) {
    throw new Error('ERROR....');
  }
  return React.useMemo(() => authUser, [authUser]);
}
