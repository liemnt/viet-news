import { combineReducers } from "redux-immutable";
import tags from "./tags";
const news = combineReducers({
  tags
});

export default news;
