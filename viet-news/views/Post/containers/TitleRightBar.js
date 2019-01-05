import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { timeline } from "../reducers/timeline.selector";
import Link from "next/link";

class TitleRightBar extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    currentArticle: PropTypes.object.isRequired
  };

  render() {
    const { timeline, currentArticle } = this.props;
    const { category_id, timeline_id } = currentArticle;
    return (
      <Link
        href={`/category?categoryId=${category_id}`}
        as={`/category/${category_id}`}
      >
        <a href="javascript:0" className="news-tabs__title h2">
          {timeline.get("id") && (
            <span style={{ fontSize: "1.5rem" }}>Sự kiện:</span>
          )}
          {timeline.get("name")}
          <i className="icon-right-open" />
        </a>
      </Link>
    );
  }
}
const mapStateToProps = state => ({
  timeline: timeline(state)
});
export default connect(mapStateToProps)(TitleRightBar);
