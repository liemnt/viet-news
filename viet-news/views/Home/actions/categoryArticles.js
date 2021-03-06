import {
  GET_CATEGORY_ARTICLES_ERROR,
  GET_CATEGORY_ARTICLES_SUCCESS,
  GET_CATEGORY_ARTICLES
} from "../const/categoryArticles";

const getCategoryArticles = category => {
  return {
    type: GET_CATEGORY_ARTICLES,
    category
  };
};

const getCategoryArticlesSuccess = articles => {
  return {
    type: GET_CATEGORY_ARTICLES_SUCCESS,
    articles
  };
};

const getCategoryArticlesError = error => {
  return {
    type: GET_CATEGORY_ARTICLES_ERROR,
    error
  };
};

export {
  getCategoryArticles,
  getCategoryArticlesSuccess,
  getCategoryArticlesError
};
