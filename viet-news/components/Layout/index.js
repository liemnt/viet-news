import Header from "../Header/index";
import StyledLayout from "./Layout";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="1 days" />
      <meta httpEquiv="content-language" content="vi" />
      <link
        href="../../static/favicon.ico"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    <StyledLayout />
  </div>
);

export default Layout;
