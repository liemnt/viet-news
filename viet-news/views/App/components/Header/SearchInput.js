import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

class SearchInput extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    isOpen: PropTypes.bool.isRequired
  };

  render() {
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
        {this.props.isOpen && (
          <div className="search-container search-container__none">
            <div className="container">
              <form action="#" method="post" role="search">
                <input
                  id="search-bar"
                  placeholder="Text Enter.."
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        )}
      </CSSTransitionGroup>
    );
  }
}

export default SearchInput;
