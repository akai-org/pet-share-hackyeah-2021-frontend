import React, { useState, useEffect, createContext, useContext } from 'react';

interface IAppContext {
    user: any;
    fetchUser: () => void;
}

export const defaultState = {
    user: false,
    fetchUser: () => {}
};

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;