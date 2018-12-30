import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SlideItem extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.id,
      thumbnail: PropTypes.string
    }).isRequired
  };

  render() {
    const { name, description, thumbnail } = this.props.data;
    return (
      <div role="tabpanel" className="tab-pane fade in active" id="home">
        <img
          src={thumbnail || "http://placehold.it/760x450"}
          alt="main img"
          className="tab-pane__img"
        />
        <div className="header_news_text tab-pane__block">
          <p className="tab-pane__category yel_line">People</p>
          <a className="tab-pane__title">{name}</a>
          <p className="tab-pane__text">{description}</p>
        </div>
      </div>
    );
  }
}

export default SlideItem;
