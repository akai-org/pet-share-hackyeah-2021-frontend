import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Topbar } from '@components/topbar';
import NavBar from '@components/ui/NavBar/NavBar';
import '../styles/globals.css';
import { AppProvider } from '@context/AppContext/AppProvider';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Topbar />
        <Box sx={{ height: '50px' }} />
        <Component {...pageProps} />
        <NavBar />
      </ThemeProvider>
    </AppProvider>
  );
};

export default MyApp;
