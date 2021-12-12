import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { useItems } from 'apis';
import { Category } from '@components/ui/Category/Category';

const Browse: NextPage = () => {
  const { data, isLoading, error } = useItems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {data.map((item) => (
        <Category key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default Browse;
