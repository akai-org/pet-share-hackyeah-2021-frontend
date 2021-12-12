import { useAppContext } from '@context/AppContext';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const ItemDetails: NextPage = () => {
  const router = useRouter();
  const { user } = useAppContext();

  return (
    <Container>
      <Card sx={{ height: '100%', width: 'auto', margin: '1em' }}>
        <CardMedia
          component="img"
          height="140"
          src="https://homla.com.pl/media/catalog/product/cache/e252c4074c67ade3f792d8397da5c502/5/9/5902869959626.jpg"
          alt="sry"
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h6" component="div" color="text.secondary">
            01.01.2020
          </Typography>
          <Typography variant="h6">Koce - Psy</Typography>
          <Typography variant="h6">Oddam</Typography>
          <Typography variant="h6">Warszawa</Typography>
          <Typography variant="caption" sx={{ padding: '1em 0', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere nibh quis malesuada tempus. Integer
            eleifend turpis quis ipsum aliquet, sed commodo orci gravida. Morbi aliquam vel velit sed eleifend. Fusce
            enim enim
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={() => router.push(`/user/${user?.username}/messages`)}>
            Napisz
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ItemDetails;
