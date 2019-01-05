import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getArticlesByTag, resetPage } from "../actions/articles";
import LeftNewsList from "../../App/components/LeftNewsList";
import RightNewsList from "../../App/components/RightNewsList";
import _ from "lodash";
import Title from "../../../views/App/components/Title";
import FlipMove from "react-flip-move";
import {
  isLoading,
  numPerPage,
  page,
  selectArticlesByTag,
  total
} from "../reducers/articles.selector";
import LoadMore from "./LoadMore";

class ListNewsContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  componentWillMount() {
    const { tag } = this.props;
    this.props.getArticlesByTag(tag.id, 1);
  }

  render() {
    const { articles, tag, page, numPerPage, isLoading } = this.props;
    const limitArticle = articles.toJS().slice(0, (page - 1) * numPerPage);
    return (
      <div className="wrap wrap_gray">
        <Title title={"#" + tag.name} />
        <FlipMove>
          {_.chunk(limitArticle, numPerPage).map((articlesList, index) => {
            if (index % 2 === 0) {
              return (
                <LeftNewsList
                  key={index}
                  extraClassName={index === 0 ? "pt20" : ""}
                  categories={this.props.categories}
                  latestArticles={articlesList}
                />
              );
            }
            return (
              <RightNewsList
                key={index}
                categories={this.props.categories}
                latestArticles={articlesList}
              />
            );
          })}
        </FlipMove>
        <LoadMore tag={tag} className="wrap-gray" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: selectArticlesByTag(state),
    page: page(state),
    numPerPage: numPerPage(state),
    total: total(state),
    isLoading: isLoading(state)
  };
};

const mapDispatchToProps = {
  getArticlesByTag,
  resetPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNewsContainer);
