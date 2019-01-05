import React, { PureComponent } from "react";
import Home from "../views/Home";
import Head from "next/head";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <Head>
          <title>VietNews- Website tổng hợp tin tức</title>
          <meta content="VietNews- Website tổng hợp tin tức" />
        </Head>
        <Home {...this.props} />
      </div>
    );
  }
}

Index.getInitialProps = context => {};

export default Index;
