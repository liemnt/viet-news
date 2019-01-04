import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import CategoryArticle from "./CategoryArticle";

const configSlider = {
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

class CategoryArticles extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categoryArticles: PropTypes.object.isRequired
  };

  render() {
    const { data, name } = this.props.categoryArticles;
    return (
      <section className="wrap wrap_gray">
        <div className="container container__no-padding">
          <div className="projects__title">
            <h2 className="block-title__h2">{name}</h2>
          </div>
          <Slider {...configSlider} className="popular__content">
            {data.map(item => {
              return <CategoryArticle key={item.id} article={item} />;
            })}
          </Slider>
        </div>
      </section>
    );
  }
}

export default CategoryArticles;
