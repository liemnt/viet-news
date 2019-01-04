import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "react-timeago";
import viStrings from "react-timeago/lib/language-strings/vi";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import Link from "next/link";

const formatter = buildFormatter(viStrings);

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
    const { title, backstory, thumbnail, crawled_at, slug } = this.props.data;
    return (
      <Link href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <a
          href="javascript:0"
          role="tabpanel"
          className="tab-pane fade in active"
        >
          <div className="tab-pane__img">
            <img src={thumbnail || "http://placehold.it/760x450"} alt="" />
          </div>
          <div className="header_news_text tab-pane__block">
            <p className="tab-pane__category yel_line">
              <TimeAgo formatter={formatter} date={crawled_at} />
            </p>
            <a className="tab-pane__title">{title}</a>
            <p className="tab-pane__text">{backstory}</p>
          </div>
        </a>
      </Link>
    );
  }
}

export default SlideItem;
