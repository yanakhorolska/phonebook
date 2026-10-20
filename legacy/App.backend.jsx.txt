import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Main = lazy(() => import('./Main'));
const Registration = lazy(() => import('../pages/Registration'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
