import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

type Props = {
  name: string;
  imageUrl: string;
  id: number;
};

export const Category: FunctionComponent<Props> = ({ name, imageUrl, id }) => {
  return (
    <Link href={`/items/list/${id}`} passHref>
      <Card sx={{ maxWidth: 345, margin: '1em' }} component="a">
        <CardMedia component="img" height="140" src={imageUrl} alt="sry" />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
