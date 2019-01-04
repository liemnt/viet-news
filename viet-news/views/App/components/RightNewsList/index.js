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
              <div className="col-sm-6 p0">
                {latestArticles.slice(0, 4).map((article, index) => {
                  return (
                    <div className="col-xs-6">
                      <SmallArticleCard
                        categories={categories}
                        article={article}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="col-xs-6">
                <LargeLatestArticle
                  article={latestArticles[4]}
                  categories={categories}
                />
              </div>
            </div>
            <div className="row">
              {latestArticles.slice(5).map((article, index) => {
                return (
                  <div className="col-xs-3">
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
