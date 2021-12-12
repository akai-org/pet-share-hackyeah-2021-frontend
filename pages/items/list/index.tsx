import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Category } from '@components/ui/Category/Category';

const Browse: NextPage = () =>
  // const items = useItems()

   (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* {fetchedItems.map((item) => ( */}
      {/*  <Category name={item.name} categoryId={item.name} key={item.name} /> */}
      {/* ))} */}
    </Box>
  )
;

export default Browse;
