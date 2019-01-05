import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class FooterLine extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className="footer slate_gray copyrights">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="copyright">
                © 2018 VietNews | Development by{" "}
                <a href="http://exsythemes.com" target="_blank">
                  Goodnight Team
                </a>
              </p>
            </div>
            <div className="col-sm-6">
              <div className="social navbar-right">
                <ul className="social__list">
                  <li className="social__item">
                    <a className="facebook" href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="gplus" href="#">
                      <i className="icon-gplus" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="twitter" href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="youtube" href="#">
                      <i className="icon-youtube" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="linkedin" href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="pinterest" href="#">
                      <i className="icon-pinterest" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="tumblr" href="#">
                      <i className="icon-tumblr" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="rss" href="#">
                      <i className="icon-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLine;
