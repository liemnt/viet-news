import { GET_TAGS, GET_TAGS_ERROR, GET_TAGS_SUCCESS } from "../const/tags";

const getTags = tagsList => {
  return {
    type: GET_TAGS,
    tagsList
  };
};

const getTagsSuccess = tags => {
  return {
    type: GET_TAGS_SUCCESS,
    tags
  };
};

const getTagsError = error => {
  return {
    type: GET_TAGS_ERROR,
    error
  };
};

export { getTags, getTagsSuccess, getTagsError };
