import React, { FunctionComponent, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { MdHomeFilled, MdAddCircle, MdOutlineToys, MdOutlineMessage } from 'react-icons/md';
import { GoOrganization } from 'react-icons/go';
import { useRouter } from 'next/router';

const NavBar: FunctionComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          router.push(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<MdHomeFilled size="30" />} value="/" />
        <BottomNavigationAction
          label="Organizations"
          icon={<GoOrganization size="30" />}
          value="/market/organizations"
        />
        <BottomNavigationAction
          showLabel={false}
          icon={<MdAddCircle size="40" color="var(--secondary)" />}
          value="/user/create"
        />
        <BottomNavigationAction label="Items" icon={<MdOutlineToys size="30" />} value="/market/browse" />
        <BottomNavigationAction label="Messages" icon={<MdOutlineMessage size="30" />} value="/social/messages" />
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;
