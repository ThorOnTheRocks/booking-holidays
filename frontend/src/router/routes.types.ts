import { ReactNode } from 'react';

export type RoutesProps = {
  path: string;
  element: ReactNode;
  children?: RoutesProps[];
};
