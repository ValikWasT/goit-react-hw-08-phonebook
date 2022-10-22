import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const LayoutHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
