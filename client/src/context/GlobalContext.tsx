import * as React from 'react';
import { IProduct, IUser } from '@/types';

// types and interfaces
interface IGlobalState {
  user: IUser | null;
  apiProducts: IProduct[];
  products: IProduct[];
}

type TAction = { type: 'LOGIN'; payload: IUser } | { type: 'LOGOUT' };

// declaring global context
export const GlobalContext = React.createContext<{
  state: IGlobalState;
  dispatch: React.Dispatch<TAction>;
} | null>(null);

// defining reducer
const reducer = (state: IGlobalState, action: TAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
  }
};

// initial states
const initialState: IGlobalState = {
  user: null,
  apiProducts: [],
  products: [],
};

// provider
export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
