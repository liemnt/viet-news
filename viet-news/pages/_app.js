import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Header from "../views/App/components/Header";
import FooterLine from "../views/App/components/Footer/FooterLine";
import Footer from "../views/App/components/Footer/Footer";
import Index from "../views/App/components/GoTop";

import createStore from "../store";
import { getAllCategories } from "../services/api/category";
import { getLatestTag } from "../services/api/tag";
import { getLatestArticles } from "../services/api/article";

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
    let tags = [];
    const tagRes = await getLatestTag();
    if (tagRes.errors === null) {
      tags = tagRes.data.results;
    }

    let articles = [];
    const articlesRes = await getLatestArticles();
    if (articlesRes.errors === null) {
      articles = articlesRes.data.results;
    }

    return { pageProps, categories, tags, articles };
  }

  render() {
    const {
      Component,
      articles,
      pageProps,
      tags,
      categories,
      store
    } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Header {...pageProps} categories={categories} />
          <Component categories={categories} {...pageProps} />
          <Footer articles={articles} tags={tags} />
          <FooterLine />
          <Index />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
