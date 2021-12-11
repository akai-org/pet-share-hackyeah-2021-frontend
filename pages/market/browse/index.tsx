import {Box} from '@mui/material';
import type {NextPage} from 'next';
import {ItemCard} from '@components/ui/ItemCard/ItemCard';

const Browse: NextPage = () => {
  const fetchedItems = [
    {name: 'test1'},
    {name: 'test2'},
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {fetchedItems.map((item) => (
        <ItemCard name={item.name} itemId={item.name} key={item.name} />
      ))}
    </Box>
  );
};

export default Browse;
