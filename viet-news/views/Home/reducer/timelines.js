import { GET_ALL_TIMELINE, GET_ALL_TMELINE_SUCCESS } from "../const";
import Immutable, { fromJS } from "immutable";
import { combineReducers } from "redux";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ALL_TIMELINE:
      return true;
    default:
      return state;
  }
};

const timelines = (state = Immutable.List(), action) => {
  switch (action.type) {
    case GET_ALL_TMELINE_SUCCESS:
      return fromJS(action.timelines);
    default:
      return state;
  }
};

const timelinesReducer = combineReducers({
  isLoading,
  timelines
});

export default timelinesReducer;
