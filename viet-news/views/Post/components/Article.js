import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../../App/components/TimeAgo";
import Link from "next/link";
import classNames from "classnames";

class Article extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired
  };

  render() {
    const { isActive } = this.props;
    const { title, published_at, slug, thumbnail } = this.props.article;
    return (
      <Link scroll={false} href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <li
          style={{ width: "100%" }}
          className={classNames({ active: isActive })}
        >
          <a style={{ display: "flex" }} href="javascript:0">
            <div style={{ flexShrink: 0, paddingRight: 10, width: "30%" }}>
              <div
                style={{ marginBottom: 0 }}
                className="thumbnail thumbnail-43"
              >
                <img src={thumbnail} alt="" />
              </div>
            </div>
            <div>
              <span className="time">
                <i className="icon-clock-1" />
                <TimeAgo date={published_at} />
              </span>
              {title}
            </div>
          </a>
        </li>
      </Link>
    );
  }
}

export default Article;
