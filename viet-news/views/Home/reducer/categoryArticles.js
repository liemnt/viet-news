import {
  GET_CATEGORY_ARTICLES_ERROR,
  GET_CATEGORY_ARTICLES_SUCCESS,
  GET_CATEGORY_ARTICLES
} from "../const/categoryArticles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { RESET_PAGE } from "../const/page";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_CATEGORY_ARTICLES:
      return true;
    case GET_CATEGORY_ARTICLES_SUCCESS:
    case GET_CATEGORY_ARTICLES_ERROR:
    case RESET_PAGE:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_CATEGORY_ARTICLES_SUCCESS:
      return state.push(fromJS(action.articles));
    case RESET_PAGE:
      return Immutable.List();
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_CATEGORY_ARTICLES_ERROR:
      return action.error;
    case GET_CATEGORY_ARTICLES:
    case GET_CATEGORY_ARTICLES_SUCCESS:
    case RESET_PAGE:
      return null;
    default:
      return state;
  }
};

const categoryArticles = combineReducers({
  isLoading,
  data,
  error
});

export default categoryArticles;
