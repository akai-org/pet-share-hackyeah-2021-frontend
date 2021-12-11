import React, {FunctionComponent, useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {MdAddCircle, MdHomeFilled, MdOutlineMessage, MdOutlineToys} from 'react-icons/md';
import {GoOrganization} from 'react-icons/go';
import {useRouter} from 'next/router';
// @ts-ignore
import styled from 'styled-components';

const StyledBottomNavigation = styled(BottomNavigation)`
  position: sticky;
  bottom: 0;
`

const NavBar: FunctionComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  return (
    <StyledBottomNavigation
      showLabels
      value={value}
      onChange={(event: Event, newValue: string) => {
        router.push(newValue);
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<MdHomeFilled size="30"/>} value="/"/>
      <BottomNavigationAction
        label="Organizations"
        icon={<GoOrganization size="30"/>}
        value="/social/users"
      />
      <BottomNavigationAction
        showLabel={false}
        icon={<MdAddCircle size="40" color="var(--secondary)"/>}
        value="/user/create"
      />
      <BottomNavigationAction label="Items" icon={<MdOutlineToys size="30"/>} value="/market/browse"/>
      <BottomNavigationAction label="Messages" icon={<MdOutlineMessage size="30"/>} value="/social/messages"/>
    </StyledBottomNavigation>
  );
};

export default NavBar;
