import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class GoTop extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <a href="#" id="goTop">
        <i className="icon-up-open" />
      </a>
    );
  }
}

export default GoTop;
