import { combineReducers } from "redux-immutable";
import timelines from "./timelines";
import articlesListByTimeline from "./articles";
import latestArticles from "./latestArticles";
import categoryArticles from "./categoryArticles";

const home = combineReducers({
  timelines,
  articlesListByTimeline,
  latestArticles,
  categoryArticles
});

export default home;
