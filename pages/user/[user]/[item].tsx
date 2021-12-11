import { Box, Button, Container } from '@mui/material';
import type { NextPage } from 'next';

const ItemDetails: NextPage = () => (

  <Container>
    <div
      style={{
        backgroundImage: 'url(https://cdn.frankerfacez.com/emoticon/262458/4)',
        width: '100px',
        height: '100px',
      }}
    >
      <h5>01.01.2000</h5>
    </div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        background: 'gray ',
      }}
    >
      <img
        src="https://data4.cupsell.pl/upload/generator/73795/640x420/5639065_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235"
        alt="sry"
        style={{ maxWidth: '100px', maxHeight: '100px' }}
      />
      <h1 style={{ margin: '0 0 0 1em' }}>Username</h1>
    </Box>
    <Box>
      <h3>Wymienie/Sprzedam/Oddam</h3>
    </Box>
    <Box>
      <h3>Lokalizacja:</h3>
    </Box>
    <Box>
      <h4>Opis</h4>
    </Box>
    <Button>Napisz</Button>
  </Container>
);

export default ItemDetails;
