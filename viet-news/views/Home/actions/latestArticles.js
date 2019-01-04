import {
  GET_LATEST_ARTICLE,
  GET_LATEST_ARTICLE_ERROR,
  GET_LATEST_ARTICLE_SUCCESS
} from "../const/latestArticles";

const getLatestArticles = page => {
  return {
    type: GET_LATEST_ARTICLE,
    page
  };
};

const getLatestArticleSuccess = articles => {
  return {
    type: GET_LATEST_ARTICLE_SUCCESS,
    articles
  };
};

const getLatestArticleError = error => {
  return {
    type: GET_LATEST_ARTICLE_ERROR,
    error
  };
};

export { getLatestArticles, getLatestArticleSuccess, getLatestArticleError };
