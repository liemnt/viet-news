import home from "./views/Home/reducer/index.js";
import { combineReducers } from "redux-immutable";
import app from "./views/App/reducers";
import category from "./views/Category/reducers";

const reducer = combineReducers({
  home,
  app,
  category
});

export default reducer;
