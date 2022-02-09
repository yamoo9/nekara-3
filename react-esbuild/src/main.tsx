import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import Greet from './components/greet/greet';

render(
  <StrictMode>
    <Greet message="세계에 온 것을 환영해요!" />
  </StrictMode>,
  document.getElementById('root')
);