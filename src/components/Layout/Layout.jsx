import AppMenu from 'components/AppMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutPage } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutPage>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutPage>
  );
};

export default Layout;
