import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import type { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header title="BookYourHolidays.com" />
      <div className="flex-1 mb-10">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
