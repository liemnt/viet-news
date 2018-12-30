import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SearchButton extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <li
        onClick={e => this.props.onClick(e)}
        className="navbar-right hidden-xs hidden-sm"
      >
        <div className="btn-search">
          <i className="icon-search-1" />
        </div>
      </li>
    );
  }
}

export default SearchButton;
