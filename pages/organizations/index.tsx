import { Container, MenuItem, Select, SelectChangeEvent, Slider, Typography } from '@mui/material';
import { Organisation } from '@components/Organisation/Organisation';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import { useOrganizations } from 'apis';

const StyledContainer = styled(Container)`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;

  select {
    min-width: 200px;
  }

  h6 {
    margin: 20px 0 40px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
`;

const Users: NextPage = () => {
  const { data: organisations, isLoading, error } = useOrganizations();
  const [location, setLocation] = useState('Get Location');
  console.log(`organisations`, organisations);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <StyledContainer>
      <Select
        labelId="location-select-label"
        id="location-select"
        value={location}
        color="secondary"
        autoWidth
        onChange={(event: SelectChangeEvent) => {
          setLocation(event.target.value as string);
        }}
      >
        <MenuItem value="Poznań">Poznan</MenuItem>
        <MenuItem value="Warszawa">Warszawa</MenuItem>
        <MenuItem value="Get Location" selected>
          Get Location
        </MenuItem>
      </Select>
      <Typography variant="h6">Distance:</Typography>
      <Slider
        aria-label="Distance"
        defaultValue={25}
        color="secondary"
        valueLabelDisplay="on"
        step={5}
        max={50}
        sx={{ width: '60%' }}
      />
      <Wrapper>
        {organisations.map((org) => (
          <Organisation key={org.id} {...org} />
        ))}
      </Wrapper>
    </StyledContainer>
  );
};

export default Users;
