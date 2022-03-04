import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

ProtectedRoute.defaultProps = {
  isAllowed: false,
}
