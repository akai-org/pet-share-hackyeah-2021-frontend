import {Container, Typography} from '@mui/material';
import type {NextPage} from 'next';

const item = {
  imageUrl: '/resources/zabawka.jpg',
  title: 'Zabawka dla psa'
}

const BrowseItemDetails: NextPage = () => (
  <Container>
    <img src={item.imageUrl} alt="Item"/>
    <Typography variant="h2">{item.title}</Typography>
  </Container>
);

export default BrowseItemDetails;
