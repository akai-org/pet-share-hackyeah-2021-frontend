import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  category: string;
  date: Date;
  image: string;
  itemId: string;
};

export const ItemCard: FunctionComponent<Props> = ({ name, category, date, image, itemId }) => {
  const router = useRouter();

  return (
    <Link passHref href={`${router.asPath}/${itemId}`}>
      <Card sx={{ maxWidth: 345, margin: '1em' }}>
        <CardMedia component="img" height="140" src={image} alt="sry" />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h6" component="div" color="text.secondary">
            {date.toLocaleDateString()}
          </Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{category}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
