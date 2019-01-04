import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Title extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="wrap wrap_white">
        <div className="container title">
          <h1 className="title__h1 underscore">{title}</h1>
        </div>
      </div>
    );
  }
}

export default Title;
