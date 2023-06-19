import { createContext } from 'react';

export interface IContextProps {
  isMobile: boolean;
  currLocation: string;
}

export const EasyBeContext = createContext<IContextProps | null>(null);
