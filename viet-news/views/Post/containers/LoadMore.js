import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadMore from "../../App/components/LoadMore";
import { connect } from "react-redux";
import { getArticlesByTimelineId } from "../actions/timelines";
import { page } from "../reducers/timelines.selector";

class LoadMoreContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    timelineId: PropTypes.number
  };

  loadArticles = () => {
    const {
      categoryId,
      timelineId,
      getArticlesByTimelineId,
      page
    } = this.props;
    getArticlesByTimelineId(timelineId, categoryId, page);
  };
  render() {
    return <LoadMore onClick={this.loadArticles} />;
  }
}

const mapStateToProps = state => ({
  page: page(state)
});

const mapDispatchToProps = {
  getArticlesByTimelineId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMoreContainer);
