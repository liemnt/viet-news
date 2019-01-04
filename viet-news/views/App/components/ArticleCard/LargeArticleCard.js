import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../TimeAgo";
import Index from "../Category";
import Link from "next/link";

class LargeArticleCard extends PureComponent {
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
      category_id,
      slug
    } = this.props.article;
    const { categories } = this.props;
    return (
      <Link href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <a href="javascript:0" className="thumbnail thumbnail_big">
          <div className="thumbnail__container thumbnail__container--big">
            <img src={thumbnail || "http://placehold.it/560x349"} alt="News" />
          </div>
          <div className="caption thumbnail__caption">
            <div className="news caption__news">
              <p className="news__category yellow-line">
                <Index categories={categories} categoryId={category_id} />
              </p>
              <span className="news__head">{title}</span>
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
        </a>
      </Link>
    );
  }
}

export default LargeArticleCard;
