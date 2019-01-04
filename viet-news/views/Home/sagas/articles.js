import { takeEvery, call, put, select } from "redux-saga/effects";
import { GET_ARTICLES_BY_TIMELINE_ID } from "../const/articles";
import { getAllArticleByTimelineId } from "../../../services/api/article";
import { getArticlesByTimelineIdSuccess } from "../actions/articles";
import { articlesByTimeline } from "../reducer/articles.selector";
import _ from "lodash";

function* isTimelineIdExist(timelineId) {
  const existedTimeline = yield select(state => articlesByTimeline(state));
  const existedTimelineArray = _.map(existedTimeline.toJS(), "timelineId");
  return _.some(existedTimelineArray, t => t === timelineId);
}

function* getArticlesByTimeline({ timelineId }) {
  const isExist = yield call(isTimelineIdExist, timelineId);
  if (!isExist) {
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
}

function* getArticlesByTimelineFlow() {
  yield takeEvery(GET_ARTICLES_BY_TIMELINE_ID, getArticlesByTimeline);
}

export default getArticlesByTimelineFlow;
