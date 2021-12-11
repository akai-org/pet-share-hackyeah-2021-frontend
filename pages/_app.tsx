import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Topbar} from '@components/ui/TopBar/TopBar';
import NavBar from '@components/ui/NavBar/NavBar';
import '../styles/globals.css';
import {AppProvider} from '@context/AppContext/AppProvider';
import {FunctionComponent, PropsWithChildren} from 'react';
// @ts-ignore
import styled from 'styled-components';

const theme = createTheme({
  typography: {
    fontFamily:  'Raleway, Arial',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#D2B046'
    },
    secondary: {
      main: '#009340'
    }
  },
});

const StyledComponent = styled.div`
  height: calc(100vh - 112px);
`

interface MyAppProps {
  Component: FunctionComponent,
  pageProps: PropsWithChildren<any>
}

const MyApp: FunctionComponent<MyAppProps> = ({Component, pageProps}) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Topbar/>
      <StyledComponent>
        <Component {...pageProps} />
      </StyledComponent>
      <NavBar/>
    </ThemeProvider>
  </AppProvider>
);

export default MyApp;
