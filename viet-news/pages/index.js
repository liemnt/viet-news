import React, { PureComponent } from "react";
import Home from "../views/Home";

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
