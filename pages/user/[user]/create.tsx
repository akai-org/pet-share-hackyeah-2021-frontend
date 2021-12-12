import { Button, Container, MenuItem, styled, TextField } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';

const Input = styled('input')({
  display: 'none',
});

const Create: NextPage = () => {
  const [city, setCity] = React.useState('PZN');
  const [category, setCategory] = React.useState('KOC');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const addItem = () => {};

  const cities = [
    {
      value: 'PZN',
      label: 'Poznań',
    },
    {
      value: 'WAR',
      label: 'Warszawa',
    },
    {
      value: 'KRK',
      label: 'Kraków',
    },
  ];

  const categories = [
    {
      value: 'KOC',
      label: 'Kocyk',
    },
    {
      value: 'KOT',
      label: 'Koteczek',
    },
    {
      value: 'KAR',
      label: 'Karma',
    },
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <TextField variant="standard" select value={city} onChange={handleCityChange} label="Miasto">
        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField variant="standard" select value={category} onChange={handleCategoryChange} label="Kategoria">
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField variant="standard" multiline label="Opis" />
      <Button onClick={addItem}>Dodaj</Button>
    </Container>
  );
};
export default Create;
