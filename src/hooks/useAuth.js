import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/selectors';

// export const useAuth = () => {
//   return {
//     isLoggedIn: useSelector(selectIsLoggedIn),
//     isRefreshing: useSelector(selectIsRefreshing),
//     user: useSelector(selectUser),
//   };
// };
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
