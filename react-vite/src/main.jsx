import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ThemeEx } from './components/ThemeEx';
import './index.css';

render(
  <StrictMode>
    <ThemeEx />
    <ThemeEx isDarkMode />
    <ThemeEx />
    <ThemeEx isDarkMode />
    <ThemeEx />
    <ThemeEx isDarkMode />
    <ThemeEx />
    <ThemeEx isDarkMode />
  </StrictMode>,
  document.getElementById('root')
);
