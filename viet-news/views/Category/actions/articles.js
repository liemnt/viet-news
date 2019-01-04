import {
  GET_ARTICLES_BY_CATEGORY_ERROR,
  GET_ARTICLES_BY_CATEGORY,
  GET_ARTICLES_BY_CATEGORY_SUCCESS,
  RESET_PAGE
} from "../const/articles";

const getArticlesByCategory = (categoryId, page) => {
  return {
    type: GET_ARTICLES_BY_CATEGORY,
    categoryId,
    page
  };
};

const getArticlesByCategorySuccess = (articles, page, total) => {
  return {
    type: GET_ARTICLES_BY_CATEGORY_SUCCESS,
    articles,
    page,
    total
  };
};

const getArticlesByCategoryError = error => {
  return {
    type: GET_ARTICLES_BY_CATEGORY_ERROR,
    error
  };
};

const resetPage = () => {
  return {
    type: RESET_PAGE,
  };
};

export {
  getArticlesByCategory,
  getArticlesByCategorySuccess,
  getArticlesByCategoryError,
  resetPage
};
