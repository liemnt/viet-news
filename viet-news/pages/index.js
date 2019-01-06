import React, { PureComponent } from "react";
import Home from "../views/Home";
import Head from "next/head";
import PropTypes from "prop-types";
import { DOMAIN } from "../config";
import { withRouter } from "next/router";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  render() {
    const { categories, router, ...props } = this.props;
    return (
      <div>
        <Head>
          <title>VietNews- Website tổng hợp tin tức</title>
          <meta content="VietNews- Website tổng hợp tin tức" />
          <meta property="og:url" content={`${DOMAIN}/${router.asPath}`} />
          <meta
            property="og:title"
            content="VietNews - Website tổng hợp tin tức"
          />
          <meta
            property="og:description"
            content="VietNews - Website tôngr hợp tin tức"
          />
        </Head>
        <Home categories={categories} {...props} />
      </div>
    );
  }
}

Index.getInitialProps = context => {};

export default withRouter(Index);
