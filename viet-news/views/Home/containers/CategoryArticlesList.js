import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategoryArticles } from "../actions/categoryArticles";
import { selectCategoriesArticles } from "../reducer/categoryArticles.selector";
import CategoryArticlesList from "../components/CategoryArticlesList";

class CategoryArticlesListContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  componentWillMount() {
    const { categories, getCategoryArticles } = this.props;
    categories.map(category => {
      getCategoryArticles(category);
    });
  }

  render() {
    const { categoryArticles } = this.props;
    return (
      <CategoryArticlesList categoryArticlesList={categoryArticles.toJS()} />
    );
  }
}

const mapDispatchToProps = {
  getCategoryArticles
};

const mapStateToProps = state => {
  return {
    categoryArticles: selectCategoriesArticles(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryArticlesListContainer);
