import { useReducer, useEffect } from 'react'

/* ROUTER STATE ------------------------------------------------------------- */

const initialRouteInfo = {
  currentPage: 'landing',
  navigation: [
    { id: 'landing', href: '/landing', text: '홈' },
    { id: 'products', href: '/products', text: '프로덕트' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
  ],
};

const CHANGE_ROUTE ='CHANGE_ROUTE';

const routeReducer = (state, action) => {
  if (action.type === CHANGE_ROUTE) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  return state;
};

export function useRouter(initialRouteValue = initialRouteInfo) {

  const [routes, dispatch] = useReducer(routeReducer, initialRouteValue);

  useEffect(() => {
    // REDIRECTION
    const { location } = window;
    if (location.pathname === '/') location.replace('/landing');

    dispatch({
      type: CHANGE_ROUTE,
      payload: location.pathname.replace('/', ''),
    });
  }, []);

  return { routes };
}