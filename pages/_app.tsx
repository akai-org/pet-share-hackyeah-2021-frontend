import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Topbar} from '@components/ui/TopBar/TopBar';
import NavBar from '@components/ui/NavBar/NavBar';
import '../styles/globals.css';
import {AppProvider} from '@context/AppContext/AppProvider';
import {Box} from '@mui/material';
import {FunctionComponent, PropsWithChildren} from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e64a19'
    },
    secondary: {
      main: '#ffb300'
    }
  },
});

interface MyAppProps {
  Component: FunctionComponent,
  pageProps: PropsWithChildren<any>
}

const MyApp: FunctionComponent<MyAppProps> = ({Component, pageProps}) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Topbar/>
      <Box sx={{height: '50px'}}/>
      <Component {...pageProps} />
      <NavBar/>
    </ThemeProvider>
  </AppProvider>
);

export default MyApp;
