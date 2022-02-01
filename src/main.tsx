import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from '@/components';
import '@/styles/global.css';
import './axe-a11y';

// .env 파일 정보 값을 읽어오는 방법
// console.log(import.meta.env);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);