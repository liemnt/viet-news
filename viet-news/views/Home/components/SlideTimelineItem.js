import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
    }).isRequired,
    isActive: PropTypes.bool.isRequired
  };

  render() {
    const {
      data: { title, published_at },
      isActive,
      ...props
    } = this.props;
    return (
      <li
        {...props}
        className={classNames({ active: isActive })}
      >
        <a>
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
