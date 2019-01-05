import Head from "next/head";
import TimelinePage from "../views/Timeline";
import PropTypes from "prop-types";

import React, { PureComponent } from "react";
import { getTimelineById } from "../services/api/timeline";

class Timeline extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    timeline: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired
  };

  render() {
    // console.log("test timeline", this.props.timeline);
    const { categories, timeline } = this.props;
    const { name, description } = this.props.timeline;
    return (
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content={description || name} />
        </Head>
        <TimelinePage categories={categories} timeline={timeline} />
      </div>
    );
  }
}

Timeline.getInitialProps = async function(context) {
  const timelineId = context.query.timelineId;
  const res = await getTimelineById(timelineId);
  if (res.errors === null) {
    return {
      timeline: res.data
    };
  }
  return {
    timeline: {}
  };
};

export default Timeline;
