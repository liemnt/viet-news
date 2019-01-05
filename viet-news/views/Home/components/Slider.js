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
    timelines: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
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
    const { timelines, categories } = this.props;
    return (
      <div className="slate_gray">
        <div className="container" style={{ paddingBottom: 20 }}>
          <div className="row header_news_panel">
            <Slider
              arrows={false}
              dots={false}
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
                return (
                  <SlideContainer
                    categories={categories}
                    key={index}
                    currentTimeline={this.state.currentTimeline}
                    timeline={data}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="breaking-ribbon breaking-ribbon--full-width">
            <div className="breaking-ribbon__description">
              {timelines[this.state.currentTimeline].description}
            </div>
          </div>
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
    );
  }
}

export default ArticleSlider;
