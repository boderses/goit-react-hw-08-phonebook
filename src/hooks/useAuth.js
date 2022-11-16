import { useSelector } from 'react-redux';
import {
  authIsLoggedInSelector,
  authUserSelector,
  authIsRefreshingSelector,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authIsLoggedInSelector);
  const isRefreshing = useSelector(authIsRefreshingSelector);
  const user = useSelector(authUserSelector);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
