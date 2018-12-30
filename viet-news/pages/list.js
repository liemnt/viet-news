import Listpage from "../views/List";
import Layout from "../views/App/components/Layout";
import Head from 'next/head'

import React, { PureComponent } from "react";
import { getAllArticleByTimelineId } from "../services/api/article";
import {getTimelineById} from "../services/api/timeline";

class List extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Layout>
        <Listpage articles={this.props.articles} />
      </Layout>
    );
  }
}

List.getInitialProps = async function(context) {
  const timelineId = context.query.timeline_id;
  const res = await getAllArticleByTimelineId(timelineId);
  const timeline = await getTimelineById(timelineId);
  if (res.errors === null) {
    return {
      articles: res.data
    };
  }
  return {
    articles: []
  };
};

export default List;
