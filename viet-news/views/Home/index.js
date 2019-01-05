import Slider from "./containers/Slider";
import LatestNews from "./containers/LatestNews";
import Advertisement from "./components/Advertisement";
import CategoryArticlesList from "./containers/CategoryArticlesList";
import TagArticlesList from "./components/TagArticlesList";
import Title from "../../views/App/components/Title";
import Link from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetPage } from "./actions/page";

import React, { Component } from "react";

class Home extends Component {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  componentWillUnmount() {
    this.props.resetPage();
  }

  render() {
    return (
      <div>
        <Slider categories={this.props.categories} />
        <Link href={`/category?categoryId=latest`} as={`/category/latest`}>
          <a href={"javascript:0"} style={{ cursor: "pointer" }}>
            <Title title="Latest News" />
          </a>
        </Link>
        <LatestNews {...this.props} />
        <Advertisement />
        <CategoryArticlesList {...this.props} />
        {/*<TagArticlesList />*/}
      </div>
    );
  }
}

const mapDispatchToProps = {
  resetPage
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
