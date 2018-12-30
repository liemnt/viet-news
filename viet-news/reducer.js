import home from "./views/Home/reducer/index.js";
import { combineReducers } from "redux-immutable";
import app from "./views/App/reducers";

const reducer = combineReducers({
  home,
  app
});

export default reducer;
