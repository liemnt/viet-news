import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Loading extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className="preloader">
        <div className="status">
          <div className="status-block" />
        </div>
      </div>
    );
  }
}

export default Loading;
