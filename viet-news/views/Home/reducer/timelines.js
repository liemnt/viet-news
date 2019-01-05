import Immutable, { fromJS } from "immutable";
import { GET_ALL_TIMELINE, GET_ALL_TMELINE_SUCCESS } from "../const/timelines";
import { combineReducers } from "redux";
import { RESET_PAGE } from "../const/page";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ALL_TIMELINE:
      return true;
    case RESET_PAGE:
      return false;
    default:
      return state;
  }
};

const timelines = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_ALL_TMELINE_SUCCESS:
      return fromJS(action.timelines);
    case RESET_PAGE:
      return Immutable.List();
    default:
      return state;
  }
};

const timelinesReducer = combineReducers({
  isLoading,
  timelines
});

export default timelinesReducer;
