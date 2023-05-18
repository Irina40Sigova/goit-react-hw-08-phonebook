import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectErrorUser,
  selectIsLoadingUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectErrorUser);
  const isLoading = useSelector(selectIsLoadingUser);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    error,
    isLoading,
  };
};
