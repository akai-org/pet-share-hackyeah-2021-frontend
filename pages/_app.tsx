import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';
import { AppProvider } from '@context/AppContext/AppProvider';
import { Topbar } from '@components/topbar';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Topbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </AppProvider>
);

export default MyApp;
