import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {Anchor} from 'antd';
import {Affix} from 'react-overlays';

class RightSideBar extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Affix>
        <div
          className="col-sm-4 col-md-3 right_sidebar hidden-xs hidden-sm"
          data-spy="affix"
          data-offset-top="112"
          data-offset-bottom="80"
        >
          <div className="news-tabs">
            <p className="news-tabs__title h2">News feed</p>
            <ul
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              <li role="presentation" className="active">
                <a href="#home" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#profile" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#messages" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#settings" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#home" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#profile" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#messages" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#settings" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                  Volkswagen hit by multiple probes in US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Affix>
    );
  }
}

export default RightSideBar;
