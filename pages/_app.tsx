/* eslint "react/no-unstable-nested-components":"off" */

import { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Topbar } from '@components/topbar';
import NavBar from "@components/ui/NavBar/NavBar";
import '../styles/globals.css';
import {AppProvider} from "@context/AppContext/AppProvider";
import {IconButton} from "@mui/material";
import {FaTimes} from "react-icons/all";

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

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
                <NavBar/>
                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
                <NavBar/>
                </Hydrate>
            </QueryClientProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </SessionProvider>
    </AppProvider>
  );
};

export default MyApp
