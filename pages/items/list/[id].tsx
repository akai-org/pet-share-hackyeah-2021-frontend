import type { NextPage } from 'next';
import { useItem } from 'apis';
import { useRouter } from 'next/router';

const Browse: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useItem({ itemId: id });
  console.log('data', data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div>dodaj ui, bo dane pobrało :D</div>;
};

export default Browse;
