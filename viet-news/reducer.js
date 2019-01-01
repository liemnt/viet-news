import home from "./views/Home/reducer/index.js";
import { combineReducers } from "redux-immutable";
import app from "./views/App/reducers";
import { fromJS } from "immutable";

const initialState = fromJS({
  home: {},
  app: {}
});

const reducer = combineReducers({
  home,
  app
});

export { initialState };

export default reducer;