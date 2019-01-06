import React from "react";
import moment from "moment";
import Category from "../../App/components/Category";
import { Tab, Nav, NavItem } from "react-bootstrap";
import TimeAgo from "../../App/components/TimeAgo";
import Link from "next/link";

import PropTypes from "prop-types";

class Slide extends React.Component {
  static defaultProps = {};

  static propTypes = {
    articles: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1
    };
  }

  componentDidMount() {
    this.setState({
      activeKey: this.props.articles[0].id
    });
  }

  renderTabPane = () => {
    const { articles, categories } = this.props;
    const sortArticles = articles.sort(
      (a, b) => moment(b.published_at) - moment(a.published_at)
    );
    return sortArticles.slice(0, 4).map(item => {
      const { thumbnail, id, title, backstory, slug, category_id } = item;
      return (
        <Link key={id} href={`/news?slug=${slug}`} as={`/news/${slug}`}>
          <Tab.Pane style={{ cursor: "pointer" }} eventKey={id}>
            <div className="thumbnail thumbnail-169">
              <img
                src={thumbnail || "http://placehold.it/760x450"}
                alt="main img"
                className="tab-pane__img"
              />
            </div>
            <div className="header_news_text tab-pane__block">
              <p className="tab-pane__category yel_line">
                <Category categoryId={category_id} categories={categories} />
              </p>
              <span className="tab-pane__title">{title}</span>
              <p className="tab-pane__text">{backstory}</p>
            </div>
          </Tab.Pane>
        </Link>
      );
    });
  };

  renderNavItem = () => {
    const { articles } = this.props;
    const sortArticles = articles.sort(
      (a, b) => moment(b.published_at) - moment(a.published_at)
    );
    return sortArticles.slice(0, 4).map(item => {
      const { id, title, published_at } = item;
      return (
        <NavItem key={id} eventKey={id}>
          <div>
            <span className="time">
              <i className="icon-clock-1" />
              <TimeAgo date={published_at} />
            </span>
            {title}
          </div>
        </NavItem>
      );
    });
  };

  render() {
    return (
      <Tab.Container
        id={this.props.articles[0].id}
        onSelect={key => {
          this.setState({
            activeKey: key
          });
        }}
        activeKey={this.state.activeKey}
      >
        <div>
          <Tab.Content className="col-sm-8 tab-content tab-content_mob-p0">
            {this.renderTabPane()}
          </Tab.Content>
          <div className="col-sm-4 news-tabs">
            <p className="news-tabs__title h2">Tin mới</p>
            <Nav
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              {this.renderNavItem()}
            </Nav>
          </div>
        </div>
      </Tab.Container>
    );
  }
}

export default Slide;
