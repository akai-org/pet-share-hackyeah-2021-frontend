import { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSession, signIn, signOut } from 'next-auth/react';

export const Topbar: FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* PetApp */}
          </Typography>
          {session ? (
            <Button variant="contained" color="secondary" onClick={signOut}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={signIn}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
