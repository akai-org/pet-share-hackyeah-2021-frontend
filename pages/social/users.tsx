import {Box, Container} from '@mui/material';
import {Organisation} from '@components/Organisation/Organisation';
import type {NextPage} from 'next';
// @ts-ignore
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledBox = styled(Box)`
  margin: 1.5em 0;
`

const Users: NextPage = () => {
  const organisations = [
    {id: 1, username: 'nazwa organiacji', address: 'adres organizacji'},
    {id: 2, username: 'nazwa organiacji', address: 'adres organizacji'},
    {id: 3, username: 'nazwa organiacji', address: 'adres organizacji'},
    {id: 4, username: 'nazwa organiacji', address: 'adres organizacji'},
    {id: 5, username: 'nazwa organiacji', address: 'adres organizacji'},
  ];

  return (
    <StyledContainer>
      {organisations.map((org) => (
        <StyledBox key={org.id}>
          <Organisation user={org}/>
        </StyledBox>
      ))}
    </StyledContainer>
  );
};

export default Users;
