import { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useAppContext } from '@context/AppContext';

export const Topbar: FunctionComponent = () => {
    const { fetchUser } = useAppContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* PetApp */}
                    </Typography>
                    <Button variant='contained' disableElevation color='secondary' onClick={fetchUser}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}