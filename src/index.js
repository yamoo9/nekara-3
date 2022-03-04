import 'styles/index.css';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { SWRConfig } from 'swr';
import { localStorageProvider } from 'providers';
import { AuthProvider } from 'contexts';
import WireframeApp from 'wireframe/App';
import 'store';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <AuthProvider>
        <HelmetProvider>
          <Router>
            <WireframeApp />
          </Router>
        </HelmetProvider>
      </AuthProvider>
    </SWRConfig>
  </StrictMode>,
  document.getElementById('root')
);
