import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from '@/components';
import '@/styles/global.css';
import 'reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
