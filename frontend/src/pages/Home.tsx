import { ReactNode } from 'react';
import Hero from '../components/Hero/Hero';

export type HomePageTypes = {
  children?: ReactNode;
};

const HomePage = ({ children }: HomePageTypes): JSX.Element => {
  return (
    <>
      <Hero />
      {children}
    </>
  );
};

export default HomePage;
