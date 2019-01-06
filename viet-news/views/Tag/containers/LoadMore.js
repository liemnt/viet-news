import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadMore from "../../App/components/LoadMore";
import { connect } from "react-redux";
import { getArticlesByTag } from "../actions/articles";
import { numPerPage, page, total } from "../reducers/articles.selector";

class LoadMoreContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired
  };

  loadArticles = () => {
    const { tag, getArticlesByTag, page } = this.props;
    getArticlesByTag(tag.id, page);
  };
  render() {
    const { page, numPerPage, total } = this.props;
    if ((page - 1) * numPerPage <= total) {
      return <LoadMore onClick={this.loadArticles} className="wrap-gray" />;
    }
    return null;
  }
}

const mapStateToProps = state => ({
  page: page(state),
  numPerPage: numPerPage(state),
  total: total(state)
});

const mapDispatchToProps = {
  getArticlesByTag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMoreContainer);
