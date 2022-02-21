import React from 'react';
import Button from '../Button/Button';
import { useAuth } from '../../../../contexts';

function Navigation() {
  const {
    auth: { currentUser },
    signIn,
    signOut,
  } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      }}
    >
      <nav>
        <ul
          style={{
            display: 'flex',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            gap: 30,
          }}
        >
          <li>
            <a href="#linkA">linkA</a>
          </li>
          <li>
            <a href="#linkB">linkB</a>
          </li>
          <li>
            <a href="#linkC">linkC</a>
          </li>
          <li>
            <a href="#linkD">linkD</a>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', gap: 4 }}>
        {currentUser ? (
          <Button onClick={signOut}>로그아웃</Button>
        ) : (
          <>
            <Button>회원가입</Button>
            <Button
              onClick={() =>
                signIn({
                  displayName: 'yamoo9',
                  level: 'instructor',
                  photoURL: '...',
                })
              }
            >
              로그인
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
