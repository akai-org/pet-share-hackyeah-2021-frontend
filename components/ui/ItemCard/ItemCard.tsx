import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  itemId: string;
};

export const ItemCard: FunctionComponent<Props> = ({ name, itemId }) => {
  const router = useRouter();

  return (
    <Link passHref href={`${router.asPath}/${itemId}`}>
      <Card sx={{ maxWidth: 345, margin: '1em' }}>
        <CardMedia component="img" height="140" src="https://cdn.frankerfacez.com/emoticon/262458/4" alt="sry" />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h6" component="div" color="text.secondary">
            01.01.2000
          </Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">Kocyk</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
