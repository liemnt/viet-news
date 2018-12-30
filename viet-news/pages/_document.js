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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
