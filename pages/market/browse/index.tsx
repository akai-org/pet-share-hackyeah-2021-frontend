import { ItemCard } from '@components/ui/ItemCard';
import { Item } from '@data/item';
import { Box } from '@mui/material';
import type { NextPage } from 'next';

const Browse: NextPage = () => {
  const fetchedItems = [
    new Item('test1'),
    new Item('test2'),
    new Item('test3'),
    new Item('test4'),
    new Item('test5'),
    new Item('test6'),
    new Item('test7'),
    new Item('test8'),
    new Item('test9'),
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {fetchedItems.map((item) => (
        <ItemCard name={item.name} itemId={item.name} />
      ))}
    </Box>
  );
};

export default Browse;
