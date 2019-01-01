import React, { PureComponent } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import _ from "lodash";
import Slide from "../components/Slide";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { articlesByTimeline } from "../reducer/articles.selector";

// console.log('test props', PropTypes.list);

class SlideContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    articles: ImmutablePropTypes.list.isRequired,
    timeline: PropTypes.object.isRequired
  };

  render() {
    if (!_.has(this.props, "timeline")) {
      return "Chua co";
    }
    console.log("test timeline", this.props.timeline);
    const {
      timeline,
      articlesByTimeline,
      timeline: { id }
    } = this.props;
    const articles = articlesByTimeline.find(article => {
      return article.get("timelineId") === id;
    });
    if (articles) {
      return <Slide articles={articles.toJS().data} timeline={timeline} />;
    }
    return "ahihi";
  }
}

const mapStateToProps = state => ({
  articlesByTimeline: state.getIn([
    "home",
    "articlesListByTimeline",
    "articlesByTimeline"
  ])
});

export default connect(mapStateToProps)(SlideContainer);
