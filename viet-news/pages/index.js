import React, { PureComponent } from "react";
import Home from "../views/Home";
import Head from "next/head";
import PropTypes from "prop-types";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  render() {
    const { categories, ...props } = this.props;
    return (
      <div>
        <Head>
          <title>VietNews- Website tổng hợp tin tức</title>
          <meta content="VietNews- Website tổng hợp tin tức" />
        </Head>
        <Home categories={categories} {...props} />
      </div>
    );
  }
}

Index.getInitialProps = context => {};

export default Index;
