import {
  GET_ARTICLES_BY_TIMELINE_ID,
  GET_ARTICLES_BY_TIMELINE_ID_SUCCESS
} from "../const/articles";

export const getArticlesByTimelineId = timelineId => {
  return {
    type: GET_ARTICLES_BY_TIMELINE_ID,
    timelineId
  };
};

export const getArticlesByTimelineIdSuccess = articles => {
  return {
    type: GET_ARTICLES_BY_TIMELINE_ID_SUCCESS,
    articles
  };
};
