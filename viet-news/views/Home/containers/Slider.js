import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Immutable from "react-immutable-proptypes";
import { getAllTimeline } from "../actions/timelines";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import { getArticlesByTimelineId } from "../actions/articles";
import { timelines } from "../reducer/timeline.selector";

class SliderContainer extends PureComponent {
  static defaultProps = {};

  componentDidMount() {
    this.props.getAllTimeline();
  }

  static propTypes = {
    timelines: Immutable.list.isRequired,
    categories: PropTypes.array.isRequired
  };

  getArticles = (oldIndex, newIndex) => {
    this.props.getArticlesByTimelineId(
      this.props.timelines.toJS()[newIndex].id
    );
  };

  getFirstSlide = () => {
    this.props.getArticlesByTimelineId(this.props.timelines.toJS()[0].id);
  };

  render() {
    const { timelines, categories } = this.props;
    if (timelines.size > 0) {
      return (
        <Slider
          categories={categories}
          onInit={this.getFirstSlide}
          beforeChange={this.getArticles}
          timelines={timelines.toJS()}
        />
      );
    }
    return <div />;
  }
}
const mapStateToProps = state => {
  return {
    timelines: timelines(state)
  };
};

const mapDispatchToProps = {
  getAllTimeline,
  getArticlesByTimelineId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderContainer);
