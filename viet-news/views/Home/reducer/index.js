import { combineReducers } from "redux-immutable";
import timelines from "./timelines";
import articlesListByTimeline from "./articles";
import latestArticles from "./latestArticles";

const home = combineReducers({
  timelines,
  articlesListByTimeline,
  latestArticles
});

export default home;
