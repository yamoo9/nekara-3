import 'styles/index.css';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { SWRConfig } from 'swr';
import { localStorageProvider } from 'providers';
import { AuthProvider } from 'contexts';
import WireframeApp from 'wireframe/App';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <AuthProvider>
        <Router>
          <HelmetProvider>
            <WireframeApp />
          </HelmetProvider>
        </Router>
      </AuthProvider>
    </SWRConfig>
  </StrictMode>,
  document.getElementById('root')
);
