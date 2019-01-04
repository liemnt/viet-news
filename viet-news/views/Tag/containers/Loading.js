import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Loading from "../../App/components/Loading";
import { connect } from "react-redux";
import { isLoading, page } from "../reducers/articles.selector";
import { withFade } from "../../App/hoc/withFade";

class LoadingContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { page, isLoading } = this.props;
    return withFade(Loading, page === 1 && isLoading);
  }
}

const mapStateToProps = state => ({
  page: page(state),
  isLoading: isLoading(state)
});

export default connect(mapStateToProps)(LoadingContainer);
