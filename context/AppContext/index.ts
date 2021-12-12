import { Item } from '@data/item';
import { User } from '@data/user';
import { createContext, useContext } from 'react';

interface IAppContext {
  user: User | null;
  fetchUser: (username: string, password: string) => User | null;
  updateUser: (username: string, password: string) => void;
  selectedItem: Item | null;
  updateItem: (item: Item) => void;
}

export const defaultState = {
  user: null,
  fetchUser: () => null,
  updateUser: () => {},
  selectedItem: null,
  updateItem: () => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export const useAppContext = () => useContext(AppContext);

export default AppContext;
