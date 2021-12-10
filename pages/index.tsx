import { useAppContext } from '@context/AppContext'
import { Button } from '@mui/material';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { user, fetchUser } = useAppContext();

  return (
    <div>
      <h1>{ user ? "true" : "false" }</h1>
      <Button onClick={() => {
        fetchUser();
      }}>User</Button>
    </div>
  )
}

export default Home;
