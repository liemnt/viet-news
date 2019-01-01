import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SlideContainer from "../containers/Slide";
import Slider from "react-slick";

class ArticleSlider extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    timelines: PropTypes.array.isRequired
  };

  render() {
    const { timelines } = this.props;
    return (
      <Slider {...this.props}>
        {timelines.map((data, index) => {
          return <SlideContainer timeline={data} />;
        })}
      </Slider>
    );
  }
}

export default ArticleSlider;
