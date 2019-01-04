import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLatestArticles } from "../actions/latestArticles";
import { latestArticles } from "../reducer/latestArticles.selector";
import LatestNews from "../components/LatestNews";

class LatestNewsContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  componentWillMount() {
    this.props.getLatestArticles(1);
  }

  render() {
    const { latestArticles, ...props } = this.props;
    return <LatestNews {...props} latestArticles={latestArticles.toJS()} />;
  }
}

const mapStateToProps = state => ({
  latestArticles: latestArticles(state)
});

const mapDispatchToProps = { getLatestArticles };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNewsContainer);
