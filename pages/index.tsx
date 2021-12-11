import {Container} from '@mui/material';
import type {NextPage} from 'next';
import NavigationTile from '@components/ui/NavigationTile/NavigationTile';

const Home: NextPage = () =>
  // const {user} = useAppContext();

  (
    <Container
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <h1>PetApp</h1>
      <NavigationTile>
        Organizations
      </NavigationTile>
      <NavigationTile>
        Available Items
      </NavigationTile>
    </Container>
  )
;

export default Home;
