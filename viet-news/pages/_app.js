import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Header from "../views/App/components/Header";

import createStore from "../store";
import { getAllCategories } from "../services/api/category";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    let categories = [];
    const response = await getAllCategories();
    if (response.errors === null) {
      categories = response.data;
    }

    return { pageProps, categories };
  }

  render() {
    const { Component, pageProps, categories, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Header categories={categories} />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
