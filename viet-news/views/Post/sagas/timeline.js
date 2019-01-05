import { takeEvery, call, put, select } from "redux-saga/effects";
import { GET_TIMELINE_BY_ID } from "../const/timeline";
import { getTimelineByIdSuccess } from "../actions/timeline";
import { getTimelineById } from "../../../services/api/timeline";

function* getTimelineBy({ timelineId }) {
  try {
    if (timelineId) {
      const res = yield call(getTimelineById, timelineId);
      if (res.errors === null) {
        yield put(getTimelineByIdSuccess(res.data));
      }
    } else {
      yield put(
        getTimelineByIdSuccess({ id: null, name: "Tin cùng thể loại" })
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function* getTimelineByIdFlow() {
  yield takeEvery(GET_TIMELINE_BY_ID, getTimelineBy);
}

export default getTimelineByIdFlow;
