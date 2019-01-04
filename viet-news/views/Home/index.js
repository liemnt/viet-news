import Slider from "./containers/Slider";
import LatestNews from "./containers/LatestNews";
import Advertisement from './components/Advertisement'
import CategoryArticles from './components/CategoryArticles'

import React, { Component } from "react";

class Home extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>
      <Slider />
      <LatestNews {...this.props}/>
      <Advertisement/>
      <CategoryArticles/>
    </div>;
  }
}

export default Home;
