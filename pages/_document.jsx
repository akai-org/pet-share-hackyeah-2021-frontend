/* eslint @next/next/no-document-import-in-page:"off" , @next/next/google-font-preconnect:"off" , react/no-danger:"off" */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, materialSheets.getStyleElement(), styledComponentsSheet.getStyleElement()],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta name="theme-color" content="#1976d2" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="robots" href="/robots.txt" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="preconnect dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="preconnect dns-prefetch" href="https://www.googletagmanager.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
