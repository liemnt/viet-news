import home from "./views/Home/reducer/index.js";
import { combineReducers } from "redux-immutable";
import app from "./views/App/reducers";
import category from "./views/Category/reducers";
import news from "./views/Post/reducers";
import tag from "./views/Tag/reducers";

const reducer = combineReducers({
  home,
  app,
  category,
  news,
  tag
});

export default reducer;
