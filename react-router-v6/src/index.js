import 'styles/index.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { AuthProvider } from 'contexts';
import WireframeApp from 'wireframe/App';

/* -------------------------------------------------------------------------- */

render(
  <StrictMode>  
    <AuthProvider>
      <WireframeApp />
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);
