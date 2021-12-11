import { createContext, useContext } from 'react';

interface IAppContext {
    user: any;
    fetchUser: () => void;
}

export const defaultState = {
    user: false,
    fetchUser: () => {}
};


const AppContext = createContext<IAppContext>(defaultState);

export const useAppContext = () => useContext(AppContext);

export default AppContext;