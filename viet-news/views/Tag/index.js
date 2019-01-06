import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListNews from "./containers/ListNews";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    return <ListNews categories={this.props.categories} tag={this.props.tag} />;
  }
}

export default Tag;
