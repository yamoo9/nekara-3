import { useReducer, useEffect, useMemo } from 'react';

const initialRouteInfo = {
  currentPage: 'landing',
  navigation: [
    { id: 'landing', href: '/landing', text: '홈' },
    { id: 'dashboard', href: '/dashboard', text: '대시보드' },
    { id: 'products', href: '/products', text: '프로덕트' },
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

export const useRouter = () => {

  const [routes, dispatch] = useReducer(routeReducer, initialRouteInfo);

  useEffect(() => {

    const { location } = window;
    if (location.pathname === '/') location.replace('/landing');

    dispatch({
      type: 'CHANGE_ROUTE',
      payload: location.pathname.replace('/', ''),
    });

  }, []);

  const navigation = useMemo(() => routes.navigation, [routes.navigation]);
  const currentPage = useMemo(() => routes.currentPage, [routes.currentPage]);

  return { navigation, currentPage };
}