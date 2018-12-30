import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SearchButton from "../../components/Header/SearchButton";
import { toggleSearch } from "../../actions/search";
import { connect } from 'react-redux';

class SearchButtonContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <SearchButton onClick={this.props.toggleSearch} />;
  }
}

const mapDispatchToProps = {
  toggleSearch
};

export default connect(
  null,
  mapDispatchToProps
)(SearchButtonContainer);
