import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SlideContainer from "../containers/Slide";
import Slider from "react-slick";
import ActiveSlideDot from "./ActiveSlideDot";

class ArticleSlider extends PureComponent {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentTimeline: 0
    };
  }

  static propTypes = {
    timelines: PropTypes.array.isRequired
  };

  onInit = () => {
    if (typeof this.props.onInit === "function") {
      this.props.onInit();
    }
  };

  onClickDot = index => {
    this.slider.slickGoTo(index);
  };

  updateCurrentTimeline = (oldIndex, newIndex) => {
    this.setState({
      currentTimeline: newIndex
    });
    if (typeof this.props.beforeChange === "function") {
      this.props.beforeChange(oldIndex, newIndex);
    }
  };

  render() {
    const { timelines } = this.props;
    return (
      <div className="slate_gray">
        <Slider
          {...this.props}
          autoplay
          ref={slider => {
            this.slider = slider;
          }}
          beforeChange={this.updateCurrentTimeline}
          onInit={this.onInit}
          swipe={false}
          infinite
          fade
        >
          {timelines.map((data, index) => {
            return <SlideContainer key={index} currentTimeline={this.state.currentTimeline} timeline={data} />;
          })}
        </Slider>
        <div className="container">
          <div className="breaking-ribbon breaking-ribbon--full-width">
            <div className="breaking-ribbon__description">
              {timelines[this.state.currentTimeline].description}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="outer">
            {timelines.map((data, index) => {
              return (
                <ActiveSlideDot
                  key={index}
                  onClick={() => this.onClickDot(index)}
                  isActive={index === this.state.currentTimeline}
                  name={data.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleSlider;
