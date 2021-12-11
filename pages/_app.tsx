/* eslint "react/no-unstable-nested-components":"off" */

import { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Topbar } from '@components/topbar';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Topbar />
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
