import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListNews from "./containers/ListNews";
import LoadMore from "./containers/LoadMore";
import Loading from "./containers/Loading";

class Category extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    category: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Loading/>
        <ListNews
          categories={this.props.categories}
          category={this.props.category}
        />
        <LoadMore category={this.props.category} className="wrap-gray" />
      </div>
    );
  }
}

export default Category;
