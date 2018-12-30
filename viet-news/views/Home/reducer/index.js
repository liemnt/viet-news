import { combineReducers } from "redux";
import timelines from "./timelines";

const home = combineReducers({
  timelines
});

export default home;
