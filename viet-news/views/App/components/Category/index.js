import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    const category = this.props.categories.find(
      c => c.id === this.props.categoryId
    );
    if (!category) {
      return null;
    }
    return category.name;
  }
}

export default Index;
