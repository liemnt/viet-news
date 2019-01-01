import { combineReducers } from "redux-immutable";
import timelines from "./timelines";
import articlesListByTimeline from "./articles";

const home = combineReducers({
  timelines,
  articlesListByTimeline
});

export default home;
