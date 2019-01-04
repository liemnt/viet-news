import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../../App/components/TimeAgo";
import Category from "../../App/components/Category";

class LargeLastestArticle extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    const {
      thumbnail,
      title,
      backstory,
      published_at,
      category_id
    } = this.props.article;
    const { categories } = this.props;
    return <div className="col-sm-6">
        <div className="thumbnail thumbnail_big">
          <div className="thumbnail__container thumbnail__container--big">
            <img src={thumbnail || "http://placehold.it/560x349"} alt="News" />
          </div>
          <div className="caption thumbnail__caption">
            <div className="news caption__news">
              <p className="news__category yellow-line">
                <Category categories={categories} categoryId={category_id} />
              </p>
              <a href="news.html" className="news__head">
                {title}
              </a>
              <p className="news__desc">{backstory}</p>
            </div>
            <div className="posted">
              <span className="posted__date">
                <i className="icon-clock-1" /> <TimeAgo date={published_at} />
              </span>
              {/*<ul className="posted__icon">*/}
              {/*<li>*/}
              {/*<span>*/}
              {/*<i className="icon-comment-empty" />*/}
              {/*29*/}
              {/*</span>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*<span>*/}
              {/*<i className="icon-eye" />*/}
              {/*2.3k*/}
              {/*</span>*/}
              {/*</li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
      </div>;
  }
}

export default LargeLastestArticle;
