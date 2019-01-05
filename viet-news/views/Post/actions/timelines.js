import {
  RESET_PAGE,
  GET_ARTICLES_BY_TIMELINE_ID_SUCCESS,
  GET_ARTICLES_BY_TIMELINE_ID,
  GET_ARTICLES_BY_TIMELINE_ID_ERROR
} from "../const/timelines";

const getArticlesByTimelineId = (timelineId, categoryId, page) => {
  return {
    type: GET_ARTICLES_BY_TIMELINE_ID,
    categoryId,
    timelineId,
    page
  };
};

const getArticlesByTimelineIdSuccess = (articles, page, total) => {
  return {
    type: GET_ARTICLES_BY_TIMELINE_ID_SUCCESS,
    articles,
    page,
    total
  };
};

const getArticlesByTimelineIdError = error => {
  return {
    type: GET_ARTICLES_BY_TIMELINE_ID_ERROR,
    error
  };
};

const resetPage = () => {
  return {
    type: RESET_PAGE
  };
};

export {
  getArticlesByTimelineId,
  getArticlesByTimelineIdSuccess,
  getArticlesByTimelineIdError,
  resetPage
};
