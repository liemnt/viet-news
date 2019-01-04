import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LatestArticle from "./LatestArticle";
import LargeLatestArticle from "./LargeLastestArticle";

class LatestNews extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    latestArticles: PropTypes.array.isRequired
  };

  render() {
    const { categories, latestArticles } = this.props;
    return (
      <section>
        <div className="wrap wrap_white">
          <div className="container title">
            <h1 className="title__h1 underscore">Latest news</h1>
          </div>
        </div>
        <div className="wrap wrap_gray pt20">
          <div className="container">
            <div className="row">
              {latestArticles.slice(0,9).map((article, index) => {
                if (index === 0) {
                  return (
                    <LargeLatestArticle
                      categories={categories}
                      article={article}
                    />
                  );
                }
                return (
                  <LatestArticle categories={categories} article={article} />
                );
              })}
            </div>
          </div>
          {/*<div className="ajax_load">*/}
            {/*<i className="icon-arrows-cw" />*/}
            {/*Load more*/}
            {/*<svg*/}
              {/*width="128"*/}
              {/*height="40"*/}
              {/*viewBox="0 0 128 40"*/}
              {/*xmlns="http://www.w3.org/2000/svg"*/}
            {/*>*/}
              {/*<rect x="0" y="0" fill="none" width="128" height="40" />*/}
            {/*</svg>*/}
          {/*</div>*/}
        </div>
      </section>
    );
  }
}

export default LatestNews;
