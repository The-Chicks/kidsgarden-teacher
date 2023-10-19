import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/organisms/header/Header';
import { Outlet } from 'react-router-dom';
import Menu from '../components/organisms/menu/Menu';

const MainLayout = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  return (
    <>
      <Header />
      {!isMobile && <Menu />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
