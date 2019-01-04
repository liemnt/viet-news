import Head from "next/head";
import CategoryPage from "../views/Category";

import React, { PureComponent } from "react";
import { getCategoryById } from "../services/api/category";

class Category extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { name, category_description } = this.props.category;
    const { category, categories } = this.props;
    return (
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content={category_description || name} />
        </Head>
        <CategoryPage categories={categories} category={category} />
      </div>
    );
  }
}

Category.getInitialProps = async function(context) {
  const categoryId = context.query.categoryId;
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

export default Category;
