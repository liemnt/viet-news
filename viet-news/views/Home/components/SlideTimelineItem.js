import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TimeAgo from "../../App/components/TimeAgo";

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
      <li {...props} className={classNames({ active: isActive })}>
        <a>
          <span className="time">
            <i className="icon-clock-1" /> <TimeAgo date={published_at} />
          </span>
          {title}
        </a>
      </li>
    );
  }
}

export default SlideTimelineItem;
