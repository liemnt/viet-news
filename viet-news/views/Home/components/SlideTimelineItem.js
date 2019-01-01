import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TimeAgo from "react-timeago";
import viStrings from "react-timeago/lib/language-strings/vi";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(viStrings);

class SlideTimelineItem extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      published_at: PropTypes.string
    })
  };

  render() {
    const { title, published_at } = this.props.data;
    return (
      <li role="presentation" className="active">
        <a role="tab" data-toggle="tab">
          <span className="time">
            <i className="icon-clock-1" />{" "}
            <TimeAgo formatter={formatter} date={published_at} />
          </span>
          {title}
        </a>
      </li>
    );
  }
}

export default SlideTimelineItem;
