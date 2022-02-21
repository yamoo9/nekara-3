import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import ContextExample from './components/ContextEx'

render(
  <StrictMode>
    <ContextExample />
  </StrictMode>,
  document.getElementById('root')
);
