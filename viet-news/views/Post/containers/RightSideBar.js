import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getArticlesByTimelineId } from "../actions/timelines";
import RightSideBar from "../components/RightSideBar";
import { selectArticlesByTimelineId } from "../reducers/timelines.selector";
import { getTimelineById } from "../actions/timeline";

class RightSideBarContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    currentArticle: PropTypes.object.isRequired
  };

  componentWillMount() {
    const {
      currentArticle: { timeline_id, category_id },
      getArticlesByTimelineId,
      getTimelineById
    } = this.props;
    getArticlesByTimelineId(timeline_id, category_id, 1);
    getTimelineById(timeline_id);
  }

  componentDidMount() {
  }

  render() {
    const { articles, currentArticle } = this.props;
    return (
      <RightSideBar
        currentArticle={currentArticle}
        articles={articles.toJS()}
      />
    );
  }
}

const mapDispatchToProps = {
  getArticlesByTimelineId,
  getTimelineById
};

const mapStateToProps = state => ({
  articles: selectArticlesByTimelineId(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSideBarContainer);
