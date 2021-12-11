import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { MdAddCircle, MdHomeFilled, MdOutlineMessage, MdOutlineToys } from 'react-icons/md';
import { GoOrganization } from 'react-icons/go';
import { useRouter } from 'next/router';
// @ts-ignore
import styled from 'styled-components';
import { useAppContext } from '@context/AppContext';

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavBar: FunctionComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  const { user } = useAppContext();
  const addItemPath = user != null ? `/user/${user.username}/create` : '/login';
  const messagesPath = user != null ? `/user/${user.username}/messages` : '/login';

  return (
    <StyledBottomNavigation
      showLabels
      value={value}
      onChange={(event: SyntheticEvent<any>, newValue: string) => {
        router.push(newValue);
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<MdHomeFilled size="30" />} value="/" />
      <BottomNavigationAction label="Organizations" icon={<GoOrganization size="30" />} value="/social/users" />
      <BottomNavigationAction
        showLabel={false}
        icon={<MdAddCircle size="40" color="var(--secondary)" />}
        value={addItemPath}
      />
      <BottomNavigationAction label="Items" icon={<MdOutlineToys size="30" />} value="/market/browse" />
      <BottomNavigationAction label="Messages" icon={<MdOutlineMessage size="30" />} value={messagesPath} />
    </StyledBottomNavigation>
  );
};

export default NavBar;
