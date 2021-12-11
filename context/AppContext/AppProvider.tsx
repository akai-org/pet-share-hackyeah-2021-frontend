import { Item } from '@data/item';
import { User } from '@data/user';
import React, { useState, FunctionComponent } from 'react';
import AppContext, { defaultState } from '.';

export const AppProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(defaultState.user);

  function getUser(username: string, password: string): User {
    const fetchedUser = new User(
      username,
      'https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
      4,
      'Warszawa',
      [
        new Item('test'),
        new Item('test2'),
        new Item('test3'),
        new Item('test4'),
        new Item('test5'),
        new Item('test6'),
        new Item('test7'),
        new Item('test8'),
        new Item('test9'),
      ]
    );
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
