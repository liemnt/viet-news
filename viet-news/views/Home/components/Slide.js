import React, { PureComponent } from "react";
import SlideItem from "./SlideItem";
import SlideTimelineItem from "./SlideTimelineItem";
import moment from "moment";

import PropTypes from "prop-types";

class Slide extends React.Component {
  static defaultProps = {};

  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      currentArticle: 0
    };
  }

  onClick = i => {
    this.setState({
      currentArticle: i
    });
  };

  renderSlideItem = () => {
    const { articles } = this.props;
    const sortArticles = articles.sort(
      (a, b) => moment(b.published_at) - moment(a.published_at)
    );
    return sortArticles.slice(0, 4).map((data, index) => {
      return (
        <SlideTimelineItem
          key={data.id}
          onClick={this.onClick.bind(this, index)}
          isActive={index === this.state.currentArticle}
          data={data}
        />
      );
    });
  };

  render() {
    const { articles } = this.props;
    const sortArticles = articles.sort(
      (a, b) => moment(b.published_at) - moment(a.published_at)
    );
    return (
      <div className="container">
        <div className="row header_news_panel">
          <div className="col-sm-8 tab-content tab-content_mob-p0">
            <SlideItem data={sortArticles[this.state.currentArticle] || {}} />
          </div>
          <div className="col-sm-4 news-tabs">
            <p className="news-tabs__title h2">Latest news <i className="icon-right-open"></i> </p>
            <ul
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              {this.renderSlideItem()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
