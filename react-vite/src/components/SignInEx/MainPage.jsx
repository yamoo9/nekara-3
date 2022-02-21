import React from 'react';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import { AuthProvider } from '../../contexts';

function MainPage() {
  return (
    <AuthProvider>
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
