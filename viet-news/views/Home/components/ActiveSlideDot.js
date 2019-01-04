import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class ActiveSlideDot extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  };

  render() {
    const { isActive, name, ...props } = this.props;
    return (
      <div
        {...props}
        className={classNames("breaking-ribbon", {
          inactive: !isActive
        })}
      >
        <div className="breaking-ribbon__title">{name}</div>
      </div>
    );
  }
}

export default ActiveSlideDot;
