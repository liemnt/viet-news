import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../../App/components/TimeAgo";
import Category from "../../App/components/Category";

class LatestArticle extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { categories } = this.props;
    const {
      thumbnail,
      title,
      published_at,
      category_id,
      backstory
    } = this.props.article;
    return (
      <div className="col-sm-3">
        <div className="thumbnail thumbnail_small">
          <a href="news.html" className="thumbnail__link">
            <div className="thumbnail__container">
              <img
                src={thumbnail || "http://placehold.it/270x153"}
                // height="153"
                // width="270"
                alt="News"
              />
            </div>
          </a>
          <div className="caption thumbnail__caption">
            <div className="news caption__news">
              <p className="news__category yellow-line">
                <Category categories={categories} categoryId={category_id} />
              </p>
              <a href="news.html" className="news__link">
                <p className="news__text">{title}</p>
              </a>

              {/*<p className="news__text">{backstory}</p>*/}
            </div>
            <div className="posted">
              <span className="posted__date">
                <i className="icon-clock-1" /> <TimeAgo date={published_at} />
              </span>
              {/*<ul className="posted__icon">*/}
              {/*<li>*/}
              {/*<span>*/}
              {/*<i className="icon-comment-empty" />*/}
              {/*21*/}
              {/*</span>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*<span>*/}
              {/*<i className="icon-eye" />*/}
              {/*1.9k*/}
              {/*</span>*/}
              {/*</li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestArticle;
