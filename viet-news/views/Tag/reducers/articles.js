import {
  GET_ARTICLES_BY_TAG,
  GET_ARTICLES_BY_TAG_ERROR,
  GET_ARTICLES_BY_TAG_SUCCESS,
  RESET_PAGE
} from "../const/articles";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TAG:
      return true;
    case GET_ARTICLES_BY_TAG_ERROR:
    case GET_ARTICLES_BY_TAG_SUCCESS:
    case RESET_PAGE:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TAG_SUCCESS:
      return fromJS(action.articles);
    // case RESET_PAGE:
    //   return Immutable.List();
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TAG_SUCCESS:
    case GET_ARTICLES_BY_TAG:
    case RESET_PAGE:
      return null;
    case GET_ARTICLES_BY_TAG_ERROR:
      return action.error;
    default:
      return state;
  }
};

const page = (state = 1, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TAG_SUCCESS:
      return action.page;
    case RESET_PAGE:
      return 1;
    default:
      return state;
  }
};

const numPerPage = (state = 9, action) => {
  switch (action.type) {
    case RESET_PAGE:
      return 9;
    default:
      return state;
  }
};

const total = (state = 0, action) => {
  switch (action.type) {
    case GET_ARTICLES_BY_TAG_SUCCESS:
      return action.total;
    case RESET_PAGE:
      return 0;
    default:
      return state;
  }
};

const articles = combineReducers({
  isLoading,
  data,
  error,
  page,
  numPerPage,
  total
});

export default articles;
