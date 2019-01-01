import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ARTICLES_BY_TIMELINE_ID } from "../const/articles";
import { getAllArticleByTimelineId } from "../../../services/api/article";
import { getArticlesByTimelineIdSuccess } from "../actions/articles";

function* getArticlesByTimeline({ timelineId }) {
  const res = yield call(getAllArticleByTimelineId, timelineId);
  if (res.errors === null) {
    yield put(
      getArticlesByTimelineIdSuccess({
        timelineId,
        data: res.data
      })
    );
  }
}

function* getArticlesByTimelineFlow() {
  yield takeEvery(GET_ARTICLES_BY_TIMELINE_ID, getArticlesByTimeline);
}

export default getArticlesByTimelineFlow;
