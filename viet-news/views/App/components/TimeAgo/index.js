import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TimeAgo from "react-timeago";
import viStrings from "react-timeago/lib/language-strings/vi";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(viStrings);

class TimeAgoContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const {date, ...props} =this.props;
    return <TimeAgo formatter={formatter} date={date} {...props} />;
  }
}

export default TimeAgoContainer;
