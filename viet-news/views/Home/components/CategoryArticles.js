import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

const configSlider = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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

  static propTypes = {};

  render() {
    return (
      <section className="wrap wrap_gray">
        <div className="container container__no-padding">
          <div className="projects__title">
            <h2 className="block-title__h2">Popular content</h2>
          </div>
          <Slider {...configSlider} className="popular__content">
            <div>
              <div className="popular__content__slide">
                <img src="http://placehold.it/360x240" alt="" />
                <div className="popular__content__box">
                  <h5 className="popular__content__category yel_line">
                    Bussiness
                  </h5>
                  <a href="news.html" className="popular__content__link">
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="popular__content__posted">
                    <span className="popular__content__posted__date">
                      <i className="icon-clock-1" /> today, 12:30
                    </span>
                    <ul className="popular__content__posted__icon">
                      <li>
                        <span>
                          <i className="icon-comment-empty" />
                          20
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="icon-eye" />
                          9.4k
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="popular__content__slide">
                <img src="http://placehold.it/360x240" alt="" />
                <div className="popular__content__box">
                  <h5 className="popular__content__category yel_line">
                    Bussiness
                  </h5>
                  <a href="news.html" className="popular__content__link">
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="popular__content__posted">
                    <span className="popular__content__posted__date">
                      <i className="icon-clock-1" /> today, 12:30
                    </span>
                    <ul className="popular__content__posted__icon">
                      <li>
                        <span>
                          <i className="icon-comment-empty" />
                          20
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="icon-eye" />
                          9.4k
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="popular__content__slide">
                <img src="http://placehold.it/360x240" alt="" />
                <div className="popular__content__box">
                  <h5 className="popular__content__category yel_line">
                    Bussiness
                  </h5>
                  <a href="news.html" className="popular__content__link">
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="popular__content__posted">
                    <span className="popular__content__posted__date">
                      <i className="icon-clock-1" /> today, 12:30
                    </span>
                    <ul className="popular__content__posted__icon">
                      <li>
                        <span>
                          <i className="icon-comment-empty" />
                          20
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="icon-eye" />
                          9.4k
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="popular__content__slide">
                <img src="http://placehold.it/360x240" alt="" />
                <div className="popular__content__box">
                  <h5 className="popular__content__category yel_line">
                    Bussiness
                  </h5>
                  <a href="news.html" className="popular__content__link">
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="popular__content__posted">
                    <span className="popular__content__posted__date">
                      <i className="icon-clock-1" /> today, 12:30
                    </span>
                    <ul className="popular__content__posted__icon">
                      <li>
                        <span>
                          <i className="icon-comment-empty" />
                          20
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="icon-eye" />
                          9.4k
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="popular__content__slide">
                <img src="http://placehold.it/360x240" alt="" />
                <div className="popular__content__box">
                  <h5 className="popular__content__category yel_line">
                    Bussiness
                  </h5>
                  <a href="news.html" className="popular__content__link">
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="popular__content__posted">
                    <span className="popular__content__posted__date">
                      <i className="icon-clock-1" /> today, 12:30
                    </span>
                    <ul className="popular__content__posted__icon">
                      <li>
                        <span>
                          <i className="icon-comment-empty" />
                          20
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="icon-eye" />
                          9.4k
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </section>
    );
  }
}

export default CategoryArticles;
