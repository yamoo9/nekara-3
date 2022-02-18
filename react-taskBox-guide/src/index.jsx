import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from '@/styles/global.css';
import App from '@/app/app';
import 'reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
