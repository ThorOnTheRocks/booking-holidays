import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import type { LayoutProps } from './Layout.types';
import { ReactElement } from 'react';
import Toast from '../Toast/Toast';

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <main className="flex flex-col min-h-screen">
      <Toast />
      <Header title="BookYourHolidays.com" />
      <div className="flex-1 mb-10">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
