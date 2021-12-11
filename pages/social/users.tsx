import {Box, Container, MenuItem, Select, SelectChangeEvent, Slider, Typography} from '@mui/material';
import {Organisation} from '@components/Organisation/Organisation';
import type {NextPage} from 'next';
// @ts-ignore
import styled from 'styled-components';
import {useState} from 'react';

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
  
  h6{
    margin: 20px 0 40px 0;
  }
`

const StyledBox = styled(Box)`
  margin: 1.5em 0;
`

const Users: NextPage = () => {

  const [location, setLocation] = useState('Get Location')

  const organisations = [
    {id: 1, username: 'Schronisko w Dobrej', address: 'Poznań, Belgijska 10', imageUrl: '/resources/schronisko.jpg'},
    {
      id: 2,
      username: 'Schronisko Publiczne Poznan nr 3',
      address: 'Poznań, Kórnicka 5',
      imageUrl: '/resources/schronisko2.jpg'
    },
    {
      id: 3,
      username: 'Schronisko dla bezdomnych zwierząt',
      address: 'Poznań, Brytyjska 4',
      imageUrl: '/resources/schronisko3.jpg'
    },
    {id: 4, username: 'Schronisko na Garbarch', address: 'Poznań, Duńska 43', imageUrl: '/resources/schronisko4.jpg'},
  ];

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
        <MenuItem value='Poznan'>Poznan</MenuItem>
        <MenuItem value='Warszawa'>Warszawa</MenuItem>
        <MenuItem value='Get Location' selected>Get Location</MenuItem>
      </Select>
      <Typography variant="h6">Distance:</Typography>
      <Slider
        aria-label="Distance"
        defaultValue={25}
        color="secondary"
        valueLabelDisplay="on"
        step={5}
        max={50}
        sx={{width: '60%'}}
      />
      {organisations.map((org) => (
        <StyledBox key={org.id}>
          <Organisation user={org}/>
        </StyledBox>
      ))}
    </StyledContainer>
  );
};

export default Users;
