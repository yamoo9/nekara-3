import { useSelector, useDispatch } from 'react-redux';
import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useCallback, useMemo } from 'react';
import { userLogin, userLogout } from 'store/slices/auth/user';
import { setPermission, resetPermission } from 'store/slices/auth/permission';

export const useAuth = () => {
  const { user, permission } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on('init', () => {
      console.log('netlify init');
    });

    netlifyIdentity.on('login', (user) => {
      dispatch(
        userLogin({
          id: user.id,
          email: user.email,
          name: user.user_metadata.full_name,
        })
      );
      dispatch(setPermission(user.app_metadata.roles[0]));
    });

    netlifyIdentity.on('logout', () => {
      dispatch(userLogout());
      dispatch(resetPermission());
    });

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = useCallback(() => netlifyIdentity.open('login'), []);
  const logout = useCallback(() => netlifyIdentity.logout(), []);

  return useMemo(
    () => ({
      user,
      permission,
      login,
      logout,
    }),
    [login, logout, permission, user]
  );
};
