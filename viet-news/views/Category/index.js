import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListNews from "./containers/ListNews";

class Category extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    category: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    return (
        <ListNews
          categories={this.props.categories}
          category={this.props.category}
        />
    );
  }
}

export default Category;
