import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SmallArticleCard from "../ArticleCard/SmallArticleCard";
import LargeLatestArticle from "../ArticleCard/LargeArticleCard";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    latestArticles: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    extraClassName: PropTypes.string
  };

  render() {
    const { categories, latestArticles, title, extraClassName } = this.props;
    return (
      <section>
        <div className={extraClassName || ""}>
          <div className="container">
            <div className="row">
              {latestArticles.slice(0, 9).map((article, index) => {
                if (index === 0) {
                  return (
                    <div className="col-sm-6">
                      <LargeLatestArticle
                        categories={categories}
                        article={article}
                      />
                    </div>
                  );
                }
                return (
                  <div className="col-sm-3">
                    <SmallArticleCard
                      categories={categories}
                      article={article}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Index;
