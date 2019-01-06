import Head from "next/head";
import CategoryPage from "../views/Category";

import React, { PureComponent } from "react";
import { getCategoryById } from "../services/api/category";
import { withRouter } from "next/router";
import { DOMAIN } from "../config";

class Category extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { name, category_description } = this.props.category;
    const { category, categories, router } = this.props;
    return (
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content={category_description || name} />

          <meta property="og:url" content={`${DOMAIN}/${router.asPath}`} />
          <meta property="og:title" content={name} />
          <meta
            property="og:description"
            content={category_description || name}
          />
        </Head>
        <CategoryPage categories={categories} category={category} />
      </div>
    );
  }
}

Category.getInitialProps = async function(context) {
  const categoryId = context.query.categoryId;
  if (categoryId === "latest") {
    return {
      category: {
        name: "Tin mới"
      }
    };
  }
  const res = await getCategoryById(categoryId);
  if (res.errors === null) {
    return {
      category: res.data
    };
  }
  return {
    category: {}
  };
};

export default withRouter(Category);
