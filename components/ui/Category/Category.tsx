import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  categoryId: number;
  imageUrl: string
  id: number;
};

export const Category: FunctionComponent<Props> = ({ name, categoryId, imageUrl ,id}) => {
  const router = useRouter();

  return (
    <Link passHref href={`${router.asPath}/${categoryId}/${id}`}>
      <Card sx={{ maxWidth: 345, margin: '1em' }}>
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
