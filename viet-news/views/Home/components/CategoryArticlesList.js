import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CategoryArticles from "./CategoryArticles";

class CategoryArticlesList extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categoryArticlesList: PropTypes.array.isRequired
  };

  render() {
    const { categoryArticlesList } = this.props;
    return (
      <div>
        {categoryArticlesList
          .filter(c => c.data.length >= 4)
          .map(categoryArticles => {
            return (
              <CategoryArticles
                key={categoryArticles.id}
                categoryArticles={categoryArticles}
              />
            );
          })}
      </div>
    );
  }
}

export default CategoryArticlesList;
