import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  categoryId: string;
};

export const Category: FunctionComponent<Props> = ({ name, categoryId }) => {
  const router = useRouter();

  return (
    <Link passHref href={`${router.asPath}/${categoryId}`}>
      <Card sx={{ maxWidth: 345, margin: '1em' }}>
        <CardMedia component="img" height="140" src="https://cdn.frankerfacez.com/emoticon/262458/4" alt="sry" />
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
