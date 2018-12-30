import Header from "../Header/index";
import StyledLayout from "./Layout";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="1 days" />
      <meta httpEquiv="content-language" content="vi" />
    </Head>
    <Header />
    {props.children}
    {/*<StyledLayout />*/}
  </div>
);

export default Layout;
