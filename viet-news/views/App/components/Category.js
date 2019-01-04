import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Category extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    return this.props.categories.find(c => c.id === this.props.categoryId).name;
  }
}

export default Category;
