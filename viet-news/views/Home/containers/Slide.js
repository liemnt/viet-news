import React, { PureComponent } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import _ from "lodash";
import Slide from "../components/Slide";
import { connect } from "react-redux";

import { articlesByTimeline } from "../reducer/articles.selector";

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
    return null;
  }
}

const mapStateToProps = state => ({
  articlesByTimeline: articlesByTimeline(state)
});

export default connect(mapStateToProps)(SlideContainer);