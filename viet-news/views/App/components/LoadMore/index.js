import React, { PureComponent } from "react";
import ListNews from "../../../Category/containers/ListNews";

class LoadMore extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className="wrap_gray load-more">
        <div
          {...this.props}
          className={"ajax_load " + this.props.className || ""}
        >
          <i className="icon-arrows-cw" />
          Tải thêm
          <svg
            width="128"
            height="40"
            viewBox="0 0 128 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" fill="none" width="128" height="40" />
          </svg>
        </div>
      </div>
    );
  }
}

export default LoadMore;
