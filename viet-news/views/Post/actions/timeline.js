import {
  GET_TIMELINE_BY_ID,
  GET_TIMELINE_BY_ID_SUCCESS
} from "../const/timeline";

export const getTimelineById = timelineId => {
  return {
    type: GET_TIMELINE_BY_ID,
    timelineId
  };
};

export const getTimelineByIdSuccess = articles => {
  return {
    type: GET_TIMELINE_BY_ID_SUCCESS,
    articles
  };
};
