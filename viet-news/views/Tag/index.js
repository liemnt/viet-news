import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListNews from "./containers/ListNews";
import Loading from "./containers/Loading";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <Loading />
        <ListNews categories={this.props.categories} tag={this.props.tag} />
      </div>
    );
  }
}

export default Tag;
