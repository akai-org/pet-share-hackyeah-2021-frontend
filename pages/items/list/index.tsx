import {Box} from '@mui/material';
import type {NextPage} from 'next';
import {useItems} from 'apis';
import { Category } from '@components/ui/Category/Category';
import items from '../../user/items';


const Browse: NextPage = () => {
  const {data, isLoading, error} = useItems()

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
        <Category name={item.name} categoryId={item.categoryId} id={item.id} key={item.name} imageUrl={item.imageUrl}/>
       ))}
    </Box>
  )
    ;
}

export default Browse;
