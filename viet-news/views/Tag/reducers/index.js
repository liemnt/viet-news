import { combineReducers } from "redux-immutable";
import articlesByTag from "./articles";
const tag = combineReducers({
  articlesByTag
});

export default tag;
