import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import { CountContainer } from './components/Counter/container';

render(
  <StrictMode>
    <CountContainer />
  </StrictMode>,
  document.getElementById('root')
);
