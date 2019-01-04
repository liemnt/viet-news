import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListNews from "./containers/ListNews";
import LoadMore from "./containers/LoadMore";
import Loading from "./containers/Loading";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Loading />
        <ListNews categories={this.props.categories} tag={this.props.tag} />
        <LoadMore tag={this.props.tag} className="wrap-gray" />
      </div>
    );
  }
}

export default Tag;
