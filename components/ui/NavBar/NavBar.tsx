import React, {FunctionComponent} from 'react';
import NavBarItem from "@components/ui/NavBar/NavBarItem/NavBarItem";

const NavBar: FunctionComponent = () => (
  <nav>
    <NavBarItem href="/">Home</NavBarItem>
    <NavBarItem href="/market/organizations">Organizations</NavBarItem>
    <NavBarItem href="/user/create">Create</NavBarItem>
    <NavBarItem href="/market/browse">Items</NavBarItem>
    <NavBarItem href="/social/messages">Home</NavBarItem>
  </nav>
)

export default NavBar;
