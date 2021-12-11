import React, { useState, FunctionComponent } from 'react';
import AppContext, { defaultState } from '.';

export const AppProvider: FunctionComponent = ({ children }) => {
    const [user, setUser] = useState(defaultState.user);

    function getUser(): void {
        setUser(true);
    }

    const value = React.useMemo(() => ({
        user, fetchUser: getUser
    }), [user]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
