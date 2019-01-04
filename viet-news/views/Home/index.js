import Slider from "./containers/Slider";
import LatestNews from "./containers/LatestNews";
import Advertisement from "./components/Advertisement";
import CategoryArticlesList from "./containers/CategoryArticlesList";
import TagArticlesList from "./components/TagArticlesList";
import Footer from "./components/Footer";
import FooterLine from "./components/FooterLine";
import GoTop from "./components/GoTop";

import React, { Component } from "react";

class Home extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <Slider />
        <LatestNews {...this.props} />
        <Advertisement />
        <CategoryArticlesList {...this.props} />
        <TagArticlesList/>
        <Footer/>
        <FooterLine/>
        <GoTop/>
      </div>
    );
  }
}

export default Home;
