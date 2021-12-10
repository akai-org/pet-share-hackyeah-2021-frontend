import React, { useState, FunctionComponent } from 'react';
import AppContext, { defaultState } from '.';

export const AppProvider: FunctionComponent = ({ children }) => {
    const [user, setUser] = useState(defaultState.user);

    function getUser(): void {
        setUser(true);
    }

    return (
        <AppContext.Provider
            value={{
                user,
                fetchUser: getUser
            }}    
        >
            {children}
        </AppContext.Provider>
    )
}