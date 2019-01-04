import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadMore from "../../App/components/LoadMore";
import { connect } from "react-redux";
import { getArticlesByCategory } from "../actions/articles";
import { page } from "../reducers/articles.selector";

class LoadMoreContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    category: PropTypes.object.isRequired
  };

  loadArticles = () => {
    const { category, getArticlesByCategory, page } = this.props;
    getArticlesByCategory(category.id, page);
  };
  render() {
    return <LoadMore onClick={this.loadArticles} className="wrap-gray" />;
  }
}

const mapStateToProps = state => ({
  page: page(state)
});

const mapDispatchToProps = {
  getArticlesByCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMoreContainer);
