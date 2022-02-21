import React from 'react';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import { AuthProvider } from '../../contexts';

function MainPage() {
  // useState → useReducer
  // 상태 관리
  // 상태 업데이트 함수 관리
  // const authState = {
  //   currentUser: null, // { displayName, level, ... }
  //   isAuthorized: false, // true
  // };

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

  return (
    <AuthProvider value={value}>
      <div>
        <Navigation />
        <main>
          <Intro />
        </main>
      </div>
    </AuthProvider>
  );
}

export default MainPage;
