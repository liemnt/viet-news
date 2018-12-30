import { IS_SEARCH_OPEN } from "../const/search";
import { combineReducers } from "redux-immutable";

const isSearchOpen = (state = false, action) => {
  switch (action.type) {
    case IS_SEARCH_OPEN:
      return !state;
    default:
      return state;
  }
};

const search = combineReducers({
  isSearchOpen
});

export default search;
