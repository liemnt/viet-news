import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../TimeAgo";
import Index from "../Category";
import Link from "next/link";

class SmallArticleCard extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { categories } = this.props;
    const {
      thumbnail,
      slug,
      title,
      published_at,
      category_id
    } = this.props.article;
    return (
      <Link href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <a href="javascript:0" className="thumbnail thumbnail_small">
          <div className="thumbnail__link">
            <div className="thumbnail__container">
              <img
                src={thumbnail || "http://placehold.it/270x153"}
                // height="153"
                // width="270"
                alt="News"
              />
            </div>
          </div>
          <div className="caption thumbnail__caption">
            <div className="news caption__news">
              <p className="news__category yellow-line">
                <Index categories={categories} categoryId={category_id} />
              </p>
              <span className="news__link">
                <p className="news__text">{title}</p>
              </span>

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
        </a>
      </Link>
    );
  }
}

export default SmallArticleCard;
