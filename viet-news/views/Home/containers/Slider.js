import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Immutable from "react-immutable-proptypes";
import { getAllTimeline } from "../actions/timelines";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import { getArticlesByTimelineId } from "../actions/articles";

class SliderContainer extends PureComponent {
  static defaultProps = {};

  componentDidMount() {
    this.props.getAllTimeline();
  }

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    timelines: Immutable.list.isRequired
  };

  getArticles = (oldIndex, newIndex) => {
    this.props.getArticlesByTimelineId(
      this.props.timelines.toJS()[newIndex].id
    );
  };

  getFirstSlide = () => {
    this.props.getArticlesByTimelineId(this.props.timelines.toJS()[0].id);
    console.log("get first slide", this.props.timelines);
  };

  render() {
    const { timelines } = this.props;
    if (timelines.size > 0) {
      return (
        <Slider
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
    timelines: state.getIn(["home", "timelines", "timelines"])
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
