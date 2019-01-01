import Slider from "../containers/Slider";
import { connect } from "react-redux";
import { getAllTimeline } from "../actions/timelines";

export const withTimelines = Page => {
  const WithTimeline = props => <Page {...props}>{props.children}</Page>;
  WithTimeline.getInitialProps = ({ store }) => {
    store.dispatch(getAllTimeline());
    return {};
  };
  const mapDispatchToProps = {
    getAllTimeline
  };
  return connect(
    null,
    mapDispatchToProps
  )(WithTimeline);
};
