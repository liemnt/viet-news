import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,300,700&amp;subset=cyrillic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/reset.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/typography.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/webslidemenu.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/fontello.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/slick.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../static/css/main.css"
            rel="stylesheet"
            type="text/css"
          />

          <link
            href="../static/css/color-1.css"
            rel="stylesheet"
            type="text/css"
            id="skins"
          />
          <link rel="stylesheet" href="../static/css/animate.css" />
          <link rel="stylesheet" href="../static/css/nprogress.css" />
          {/*<link rel="stylesheet" href="../static/css/antd.css" />*/}
          {/*<link rel="stylesheet" href="../static/css/slick-theme.css" />*/}
          <link
            href="../static/css/react-slick.css"
            rel="stylesheet"
            type="text/css"
            id="skins"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta content="telephone=no" name="format-detection" />
          <link rel="shortcut icon" type="image/png" href="../static/img/favicon.png" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
