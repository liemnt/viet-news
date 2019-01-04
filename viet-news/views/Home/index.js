import Slider from "./containers/Slider";
import LatestNews from "./containers/LatestNews";
import Advertisement from "./components/Advertisement";
import CategoryArticlesList from "./containers/CategoryArticlesList";
import TagArticlesList from "./components/TagArticlesList";
import Title from '../../views/App/components/Title'

import React, { Component } from "react";

class Home extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <Slider />
        <Title title='Latest News'/>
        <LatestNews {...this.props} />
        <Advertisement />
        <CategoryArticlesList {...this.props} />
        <TagArticlesList/>
      </div>
    );
  }
}

export default Home;
