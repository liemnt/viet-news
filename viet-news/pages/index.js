import React, { PureComponent } from "react";
import Home from "../views/Home";
import _ from "lodash";
import { withTimelines } from "../views/Home/hocs/withTimelines";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <Home {...this.props} />;
  }
}

Index.getInitialProps = context => {
  console.log("test home ini");
};

export default Index;
