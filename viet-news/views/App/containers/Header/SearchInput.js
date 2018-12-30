import SearchInput from "../../components/Header/SearchInput";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { isSearchOpen } from "../../reducers/search.selector";
import { createStructuredSelector } from 'reselect';

class SearchInputContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <SearchInput isOpen={this.props.isOpen} />;
  }
}

const mapStateToProps = createStructuredSelector({
  isOpen: isSearchOpen()
});

export default connect(mapStateToProps)(SearchInputContainer);
