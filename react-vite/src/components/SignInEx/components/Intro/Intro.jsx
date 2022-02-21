import React from 'react';
import { useAuth } from '../../../../contexts';

function PublicContents() {
  return 'PUBILC';
}
function PrivateContents({ user }) {
  return (
    <div lang="en">
      <h1>PRIVATE</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function Intro() {
  const {
    auth: { currentUser, isAuthorized },
  } = useAuth();

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
        color: '#6627e3',
      }}
    >
      {isAuthorized ? (
        <PrivateContents user={currentUser} />
      ) : (
        <PublicContents />
      )}
    </div>
  );
}

export default Intro;
