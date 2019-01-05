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
    const { title, published_at, slug } = this.props.article;
    return (
      <Link scroll={false} href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <li
          // onClick={() => {
          //   document.body.scrollTop = 0; // For Safari
          //   document.documentElement.scrollTop = 0;
          // }}
          role="presentation"
          className={classNames({ active: isActive })}
        >
          <a href="javascript:0">
            <span className="time">
              <i className="icon-clock-1" />
              <TimeAgo date={published_at} />
            </span>
            {title}
          </a>
        </li>
      </Link>
    );
  }
}

export default Article;
