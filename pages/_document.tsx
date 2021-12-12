/* eslint  @next/next/google-font-preconnect:"off" , react/no-danger:"off" */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, styledComponentsSheet.getStyleElement()],
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
          <link rel="icon" href="/favicon.ico" sizes="any" />
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
