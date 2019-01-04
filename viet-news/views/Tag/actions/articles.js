import {
  GET_ARTICLES_BY_TAG_ERROR,
  GET_ARTICLES_BY_TAG,
  GET_ARTICLES_BY_TAG_SUCCESS,
  RESET_PAGE
} from "../const/articles";

const getArticlesByTag = (tagId, page) => {
  return {
    type: GET_ARTICLES_BY_TAG,
    tagId,
    page
  };
};

const getArticlesByTagSuccess = (articles, page, total) => {
  return {
    type: GET_ARTICLES_BY_TAG_SUCCESS,
    articles,
    page,
    total
  };
};

const getArticlesByTagError = error => {
  return {
    type: GET_ARTICLES_BY_TAG_ERROR,
    error
  };
};

const resetPage = () => {
  return {
    type: RESET_PAGE
  };
};

export {
  getArticlesByTag,
  getArticlesByTagSuccess,
  getArticlesByTagError,
  resetPage
};
