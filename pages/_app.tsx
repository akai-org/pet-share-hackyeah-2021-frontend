import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Topbar } from '@components/ui/TopBar/TopBar';
import NavBar from '@components/ui/NavBar/NavBar';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import styled from 'styled-components';
import '../styles/globals.css';
import { AppProvider } from '@context/AppContext/AppProvider';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#D2B046',
    },
    secondary: {
      main: '#009340',
    },
  },
});

const StyledComponent = styled.div`
  height: calc(100vh - 112px);
`;

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Topbar />
                <StyledComponent>
                  <Component {...pageProps} />
                </StyledComponent>
                <NavBar />
              </Hydrate>
            </QueryClientProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </SessionProvider>
    </AppProvider>
  );
};

export default MyApp;
