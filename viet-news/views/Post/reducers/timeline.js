import {
  GET_TIMELINE_BY_ID_SUCCESS,
  GET_TIMELINE_BY_ID
} from "../const/timeline";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_TIMELINE_BY_ID:
      return true;
    case GET_TIMELINE_BY_ID_SUCCESS:
      return false;
    default:
      return state;
  }
};

const data = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_TIMELINE_BY_ID_SUCCESS:
      return fromJS(action.articles);
    default:
      return state;
  }
};

const timeline = combineReducers({
  isLoading,
  data
});

export default timeline;
