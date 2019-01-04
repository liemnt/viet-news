import { combineReducers } from "redux-immutable";
import articlesByCategory from "./articles";
const category = combineReducers({
  articlesByCategory
});

export default category;
