import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { App } from '@/components';
import 'reportWebVitals';

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
