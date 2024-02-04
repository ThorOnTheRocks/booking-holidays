import { ReactElement, ReactNode } from 'react';
import Hero from '../components/Hero/Hero';

export type HomePageTypes = {
  children?: ReactNode;
};

const HomePage = ({ children }: HomePageTypes): ReactElement => {
  return (
    <>
      <Hero />
      {children}
    </>
  );
};

export default HomePage;
