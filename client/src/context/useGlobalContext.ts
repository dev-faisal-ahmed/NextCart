import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error(
      'You are trying to access the context from outside of the scope',
    );

  return context;
};
