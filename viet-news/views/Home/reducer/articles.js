import {
  GET_ARTICLES_BY_TIMELINE_ID,
  GET_ARTICLES_BY_TIMELINE_ID_SUCCESS
} from "../const/articles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { RESET_PAGE } from "../const/page";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TIMELINE_ID:
      return true;
    case GET_ARTICLES_BY_TIMELINE_ID_SUCCESS:
    case RESET_PAGE:
      return false;
    default:
      return state;
  }
};

const articlesByTimeline = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TIMELINE_ID_SUCCESS:
      return state.push(fromJS(action.articles));
    case RESET_PAGE:
      return Immutable.List();
    default:
      return state;
  }
};

const articlesListByTimeline = combineReducers({
  isLoading,
  articlesByTimeline
});

export default articlesListByTimeline;
