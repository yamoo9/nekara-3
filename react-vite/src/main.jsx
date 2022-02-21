import { StrictMode } from 'react';
import { render } from 'react-dom';
import MainPage from './components/SignInEx/MainPage';
import './index.css';

render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
  document.getElementById('root')
);
