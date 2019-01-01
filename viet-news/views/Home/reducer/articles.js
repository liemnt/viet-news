import {
  GET_ARTICLES_BY_TIMELINE_ID,
  GET_ARTICLES_BY_TIMELINE_ID_SUCCESS
} from "../const/articles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TIMELINE_ID:
      return true;
    case GET_ARTICLES_BY_TIMELINE_ID_SUCCESS:
      return false;
    default:
      return state;
  }
};

const articlesByTimeline = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TIMELINE_ID_SUCCESS:
      return state.push(fromJS(action.articles));
    default:
      return state;
  }
};

const articlesListByTimeline = combineReducers({
  isLoading,
  articlesByTimeline
});

export default articlesListByTimeline;
