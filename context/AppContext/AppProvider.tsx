import { Item } from '@data/item';
import { User } from '@data/user';
import React, { useState, FunctionComponent } from 'react';
import AppContext, { defaultState } from '.';

export const AppProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(defaultState.user);
  const [item, setItem] = useState<Item | null>(defaultState.selectedItem);

  function getUser(username: string, password: string): User {
    const fetchedUser = new User(
      username,
      'https://www.seekpng.com/png/detail/960-9609689_red-question-mark-symbol-question-mark.png',
      4,
      'Warszawa',
      [
        new Item(
          'Koce',
          'Psy',
          new Date(2022, 1),
          'https://homla.com.pl/media/catalog/product/cache/e252c4074c67ade3f792d8397da5c502/5/9/5902869959626.jpg'
        ),
        new Item(
          'Smycze',
          'Psy',
          new Date(2022, 1),
          'https://shop-cdn-m.mediazs.com/bilder/smycz/flexi/cat/new/classic/0/400/65102_flexi_cat_new_classic_xs_hs_3_0.jpg'
        ),
        new Item(
          'Karma',
          'Koty',
          new Date(2022, 1, 1),
          'https://image.ceneostatic.pl/data/products/44596520/i-whiskas-1-lat-z-kurczakiem-w-sosie-karma-dla-kota-puszka-400g.jpg'
        ),
      ]
    );
    return fetchedUser;
  }

  function storeUser(username: string, password: string): void {
    setUser(getUser(username, password));
  }

  function storeItem(newItem: Item): void {
    setItem(newItem);
  }

  const value = React.useMemo(
    () => ({
      user,
      fetchUser: getUser,
      updateUser: storeUser,
      item,
      updateItem: storeItem,
    }),
    [user, item]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
