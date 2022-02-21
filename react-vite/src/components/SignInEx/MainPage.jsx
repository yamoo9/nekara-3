import React from 'react';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';

function MainPage() {
  return (
    <div>
      <Navigation />
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default MainPage;
