import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getArticlesByCategory, resetPage } from "../actions/articles";
import LeftNewsList from "../../App/components/LeftNewsList";
import RightNewsList from "../../App/components/RightNewsList";
import _ from "lodash";
import Title from "../../../views/App/components/Title";
import { withRouter } from "next/router";
import FlipMove from "react-flip-move";
import { Spin } from "antd";
import {
  isLoading,
  numPerPage,
  page,
  selectArticlesByCategory,
  total
} from "../reducers/articles.selector";

class ListNewsContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    category: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  componentWillMount() {
    const { category } = this.props;
    this.props.getArticlesByCategory(category.id, 1);
    this.props.router.events.on("routeChangeComplete", url => {
      this.props.getArticlesByCategory(this.props.router.query.categoryId, 1);
    });
  }

  render() {
    const { articles, category, page, numPerPage, isLoading } = this.props;
    const limitArticle = articles.toJS().slice(0, (page - 1) * numPerPage);
    return (
      <div className="wrap wrap_gray">
        <Title title={category.name} />
        <FlipMove>
          {_.chunk(limitArticle, numPerPage).map((articlesList, index) => {
            if (index % 2 === 0) {
              return (
                <LeftNewsList
                  extraClassName={index === 0 ? "pt20" : ""}
                  categories={this.props.categories}
                  latestArticles={articlesList}
                />
              );
            }
            return (
              <RightNewsList
                categories={this.props.categories}
                latestArticles={articlesList}
              />
            );
          })}
        </FlipMove>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: selectArticlesByCategory(state),
    page: page(state),
    numPerPage: numPerPage(state),
    total: total(state),
    isLoading: isLoading(state)
  };
};

const mapDispatchToProps = {
  getArticlesByCategory,
  resetPage
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListNewsContainer)
);
