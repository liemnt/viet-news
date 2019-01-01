import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SlideArticle extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({

    })
  };

  render() {
    return (
      <li role="presentation" className="active">
        <a href="#home" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 10:11
                  </span>
          Volkswagen hit by multiple probes in US Volkswagen hit by
          multiple probes in US
        </a>
      </li>
    );
  }
}

export default SlideArticle;
