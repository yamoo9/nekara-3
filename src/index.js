import 'styles/index.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import WireframeApp from 'wireframe/App';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <WireframeApp />
  </StrictMode>,
  document.getElementById('root')
);
