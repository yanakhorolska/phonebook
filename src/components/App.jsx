import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import { lazy } from 'react';
// Legacy backend authentication imports and routes are preserved below.
// import { useDispatch } from 'react-redux';
// import { useAuth } from '../hooks/useAuth';
// import { refreshUser } from 'redux/operations';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

const Main = lazy(() => import('./Main'));
// const Registration = lazy(() => import('../pages/Registration'));
// const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/contacts" element={<Contacts />} />
      {/*
        Backend mode (disabled while the original API is unavailable):
        restore refreshUser(), auth routes and PrivateRoute/RestrictedRoute
        when a working backend has been connected. Source files remain intact.
      */}
      <Route path="*" element={<Main />} />
    </Route>
  </Routes>
);
export default App;
