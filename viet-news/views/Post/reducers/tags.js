import { GET_TAGS_ERROR, GET_TAGS_SUCCESS, GET_TAGS } from "../const/tags";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_TAGS:
      return true;
    case GET_TAGS_ERROR:
    case GET_TAGS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_TAGS_SUCCESS:
      return fromJS(action.tags);
    case GET_TAGS_ERROR:
    case GET_TAGS:
      return Immutable.List();
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_TAGS_SUCCESS:
    case GET_TAGS:
      return null;
    case GET_TAGS_ERROR:
      return action.error;
    default:
      return state;
  }
};

const articles = combineReducers({
  isLoading,
  data,
  error
});

export default articles;
