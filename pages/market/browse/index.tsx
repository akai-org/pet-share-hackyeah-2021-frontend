import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { ItemCard } from '@components/ui/ItemCard/ItemCard';
import { useAppContext } from '@context/AppContext';

const Browse: NextPage = () => {
  const { user } = useAppContext();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {user?.items.map((item) => (
        <ItemCard
          name={item.name}
          category={item.category}
          date={item.date}
          image={item.image}
          itemId={item.name}
          key={item.name}
        />
      ))}
    </Box>
  );
};

export default Browse;
