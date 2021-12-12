import {Box} from '@mui/material';
import type {NextPage} from 'next';
import {useItems} from 'apis';
import {Category} from '@components/ui/Category/Category';
import {router} from 'next/client';

const Browse: NextPage = () => {

  const {userId} = router.query;
  const {data, isLoading, error} = useItems({userId})


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
         <Category name={item.name} categoryId={item.itemType.id} id={item.id} key={item.id} imageUrl={item.imageUrl}/>
       ))}
    </Box>
  )
    ;
}

export default Browse;
