import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
const withFade = (WrappedComponent, isOpen) => {
  return (
    <CSSTransitionGroup
      transitionName={{
        enter: "animated",
        enterActive: "fadeIn",
        leave: "animated",
        leaveActive: "fadeOut"
      }}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {isOpen ? <WrappedComponent /> : null}
    </CSSTransitionGroup>
  );
};

export { withFade };
