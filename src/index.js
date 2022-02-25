import 'styles/index.css';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render } from 'react-dom';
import WireframeApp from 'wireframe/App';
import { AuthProvider } from 'contexts';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <WireframeApp />
        </Router>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
