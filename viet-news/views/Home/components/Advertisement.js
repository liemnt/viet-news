import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Advertisement extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <section className="wrap wrap_dark">
        <div className="container full-bradius block__sensation">
          <div className="block__sensation__info">
            <div className="block__sensation__hash">
              <a href="#">#sensation</a> <a href="#">#news</a>{" "}
              <a href="#">#nicstyle</a>
            </div>
            <div className="block__sensation__title">
              <h2 className="block__sensation__title_all">
                New template version
              </h2>
              <div className="block__sensation__title_descr">
                NicStyle bootstrap theme improved and developed
              </div>
            </div>
            <div className="block__sensation__description">
              <a
                className="show-info-button bg-1"
                href="http://exsythemes.com/"
                target="_blank"
              >
                All that you can write on our website, it will be described
                here, but in short.
              </a>
            </div>
            <div className="block__sensation__figure">
              <img src="http://placehold.it/400x280" alt="" />
            </div>
          </div>
          <div className="full-bradiusalls">
            <span className="bradius2" />
            <span className="bradius3" />
            <span className="bradius4" />
            <span className="bradius5" />
            <span className="bradius6" />
            <span className="bradius7" />
            <span className="bradius8" />
            <span className="bradius9" />
            <span className="bradius10" />
            <span className="bradius11" />
          </div>
        </div>
      </section>
    );
  }
}

export default Advertisement;
