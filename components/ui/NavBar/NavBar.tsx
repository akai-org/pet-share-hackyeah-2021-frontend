import React, {FunctionComponent, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, BottomNavigationClasses, Box} from "@mui/material";
import {MdHomeFilled, MdAddCircle, MdOutlineToys, MdOutlineMessage} from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import styled from "styled-components";

const NavBox = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
`

const NavBar: FunctionComponent = () => {

  const [value, setValue] = useState(0)

  return (
      <NavBox
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Home" icon={<MdHomeFilled size="30"/>} value="/"/>
        <BottomNavigationAction label="Organizations" icon={<GoOrganization size="30"/>} value="/market/organizations"/>
        <BottomNavigationAction showLabel={false} icon={<MdAddCircle size="40"/>} value="/user/create"/>
        <BottomNavigationAction label="Items" icon={<MdOutlineToys size="30"/>} value="/market/browse"/>
        <BottomNavigationAction label="Messages" icon={<MdOutlineMessage size="30"/>} value="/user/organizations"/>
      </NavBox>
  )
}



export default NavBar;
