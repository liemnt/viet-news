import { combineReducers } from "redux-immutable";
import tags from "./tags";
import timelines from "./timelines";
import timeline from "./timeline";
const news = combineReducers({
  tags,
  articlesByTimelineId: timelines,
  timeline
});

export default news;
