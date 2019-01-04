import {
  GET_CATEGORY_ARTICLES_ERROR,
  GET_CATEGORY_ARTICLES_SUCCESS,
  GET_CATEGORY_ARTICLES
} from "../const/categoryArticles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_CATEGORY_ARTICLES:
      return true;
    case GET_CATEGORY_ARTICLES_SUCCESS:
    case GET_CATEGORY_ARTICLES_ERROR:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_CATEGORY_ARTICLES_SUCCESS:
      return state.push(fromJS(action.articles));
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
      return null;
    default:
      return state;
  }
};

const categoryArticles = combineReducers({
  isLoading,
  data
});

export default categoryArticles;
