import { Container } from '@mui/material';
import type { NextPage } from 'next';
import NavigationTile from '@components/ui/NavigationTile/NavigationTile';
import styled from 'styled-components';

const Logo = styled.img`
  width: 80%;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

const NavigationContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const Home: NextPage = () => (
  <StyledContainer>
    <Logo src="/resources/logo.png" alt="PetApp" />
    <NavigationContainer>
      <NavigationTile href="/social/users">Organizations</NavigationTile>
      <NavigationTile href="/market/browse">Available Items</NavigationTile>
      <NavigationTile href="/about">About Us</NavigationTile>
    </NavigationContainer>
  </StyledContainer>
);
export default Home;
