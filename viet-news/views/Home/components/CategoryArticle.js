import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CategoryArticle extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, thumbnail } = this.props.article;
    return (
      <div className="popular__content__slide">
        <div className="thumbnail thumbnail-43">
          <img src={thumbnail || "http://placehold.it/360x240"} alt="" />
        </div>
        <div className="popular__content__box">
          <h5 className="popular__content__category yel_line">Bussiness</h5>
          <a href="news.html" className="popular__content__link">
            {title}
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
    );
  }
}

export default CategoryArticle;