import { postItem } from 'apis';
import { Button, Container, MenuItem, styled, TextField } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';

const Input = styled('input')({
  display: 'none',
});

const Create: NextPage = () => {
  const [typeId, setTypeId] = React.useState(1);
  const [description, setDescription] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [name, setName] = React.useState('');
  const [brandId, setBrandId] = React.useState('');
  const expirationDate = new Date();

  const handleTypeIdChange = (event) => {
    setTypeId(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBrandIdChange = (event) => {
    setBrandId(event.target.value);
  };

  const addItem = () => {
    postItem({ name, description, brandId, typeId, expirationDate, imageUrl });
  };

  const categories = [
    {
      value: 1,
      label: 'Kocyk',
    },
    {
      value: 2,
      label: 'Koteczek',
    },
    {
      value: 3,
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
      <TextField variant="standard" value={name} onChange={handleNameChange} label="Title" />
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <TextField variant="standard" value={brandId} onChange={handleBrandIdChange} label="Brand" />
      <TextField variant="standard" select value={typeId} onChange={handleTypeIdChange} label="Kategoria">
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField variant="standard" multiline value={description} onChange={handleDescriptionChange} label="Opis" />
      <Button onClick={addItem}>Dodaj</Button>
    </Container>
  );
};
export default Create;
