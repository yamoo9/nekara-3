import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from '@/components';
import '@/styles/global.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
