import 'styles/index.css';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render } from 'react-dom';
import WireframeApp from 'wireframe/App';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <WireframeApp />
      </Router>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
