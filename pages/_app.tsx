/* eslint "react/no-unstable-nested-components":"off" */

import { useState, useRef } from 'react';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import '../styles/globals.css';
import { AppProvider } from '@context/AppContext/AppProvider';
import { Topbar } from '@components/topbar';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const notistackRef = useRef();

  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            ref={notistackRef}
            action={(key) => (
              <IconButton
                onClick={() => {
                  notistackRef.current.closeSnackbar(key);
                }}
              >
                <FaTimes color="white" size={20} />
              </IconButton>
            )}
          >
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Topbar />
                <Component {...pageProps} />
                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
              </Hydrate>
            </QueryClientProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </SessionProvider>
    </AppProvider>
  );
};

export default MyApp;
