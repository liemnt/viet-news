import { combineReducers } from "redux-immutable";
import search from "./search";

const app = combineReducers({
  search
});

export default app;
