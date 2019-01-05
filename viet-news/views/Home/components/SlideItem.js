import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "../../App/components/TimeAgo";
import Link from "next/link";

class SlideItem extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.id,
      thumbnail: PropTypes.string
    }).isRequired
  };

  render() {
    const { title, backstory, thumbnail, published_at, slug } = this.props.data;
    return (
      <Link href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <a
          href="javascript:0"
          className="tab-pane fade in active"
        >
          <div className="tab-pane__img">
            <img src={thumbnail || "http://placehold.it/760x450"} alt="" />
          </div>
          <div className="header_news_text tab-pane__block">
            <p className="tab-pane__category yel_line">
              <TimeAgo date={published_at} />
            </p>
            <span className="tab-pane__title">{title}</span>
            <p className="tab-pane__text">{backstory}</p>
          </div>
        </a>
      </Link>
    );
  }
}

export default SlideItem;
