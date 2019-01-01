import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ALL_TIMELINE } from "../const/timelines";
import { getAllTimelines } from "../../../services/api/timeline";
import { getAllTimelineSuccess } from "../actions/timelines";

function* getAllTimelineToServer() {
  try {
    const res = yield call(getAllTimelines);
    if (res.errors === null) {
      yield put(getAllTimelineSuccess(res.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* getAllTimelineFlow() {
  yield takeLatest(GET_ALL_TIMELINE, getAllTimelineToServer);
}

export default getAllTimelineFlow;
