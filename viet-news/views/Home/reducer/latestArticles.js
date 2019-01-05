import {
  GET_LATEST_ARTICLE,
  GET_LATEST_ARTICLE_ERROR,
  GET_LATEST_ARTICLE_SUCCESS
} from "../const/latestArticles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { RESET_PAGE } from "../const/page";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_LATEST_ARTICLE:
      return true;
    case GET_LATEST_ARTICLE_SUCCESS:
    case GET_LATEST_ARTICLE_ERROR:
    case RESET_PAGE:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_LATEST_ARTICLE_SUCCESS:
      return state.concat(fromJS(action.articles));
    case RESET_PAGE:
      return Immutable.List();
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_LATEST_ARTICLE:
    case GET_LATEST_ARTICLE_SUCCESS:
    case RESET_PAGE:
      return null;
    case GET_LATEST_ARTICLE_ERROR:
      return action.error;
    default:
      return state;
  }
};

const latestArticles = combineReducers({
  isLoading,
  data,
  error
});

export default latestArticles;
