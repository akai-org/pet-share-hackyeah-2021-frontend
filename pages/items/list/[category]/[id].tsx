import type {NextPage} from 'next';
import {useItem} from 'apis';
import {useRouter} from 'next/router';

const Browse: NextPage = () => {

  const router = useRouter()
  const {id} = router.query
  const {data, isLoading, error} = useItem({id})
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div/>
  )
}

export default Browse;
