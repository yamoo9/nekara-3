import 'styles/index.css';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { AuthProvider } from 'contexts';
import WireframeApp from 'wireframe/App';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>  
    <AuthProvider>
      <Router>
        <HelmetProvider>
          <WireframeApp />
        </HelmetProvider>
      </Router>
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
