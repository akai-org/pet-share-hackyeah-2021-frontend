import { User } from '@data/user';
import React, { useState, FunctionComponent } from 'react';
import AppContext, { defaultState } from '.';

export const AppProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(defaultState.user);

  function getUser(username: string, password: string): User {
    const fetchedUser = new User(username, '', 0, '', []);
    setUser(fetchedUser);
    return fetchedUser;
  }

  const value = React.useMemo(
    () => ({
      user,
      fetchUser: getUser,
    }),
    [user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
