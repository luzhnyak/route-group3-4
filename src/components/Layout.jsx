import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useLocation } from 'react-router-dom/dist';

const Layout = () => {
  const location = useLocation();
  
  return (
    <>
      <header>
        {!location.pathname.includes('details') && <Navigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
