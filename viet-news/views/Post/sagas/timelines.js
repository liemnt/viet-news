import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  getCategoryArticles,
  getTimelineArticles
} from "../../../services/api/article";
import {
  getArticlesByTimelineIdSuccess,
  getArticlesByTimelineIdError
} from "../actions/timelines";
import { GET_ARTICLES_BY_TIMELINE_ID } from "../const/timelines";
import { selectArticlesByTimelineId } from "../reducers/timelines.selector";

function* getArticleByTimelineToServer({ timelineId, categoryId, page }) {
  try {
    let res = [];
    if (timelineId) {
      res = yield call(getTimelineArticles, timelineId, page);
    } else {
      res = yield call(getCategoryArticles, categoryId, page);
    }
    if (res.errors === null) {
      if (page === 1) {
        yield put(
          getArticlesByTimelineIdSuccess(
            res.data.results,
            page + 1,
            res.data.count
          )
        );
      } else {
        const currentArticles = yield select(selectArticlesByTimelineId);
        yield put(
          getArticlesByTimelineIdSuccess(
            currentArticles.toJS().concat(res.data.results),
            page + 1,
            res.data.count
          )
        );
      }
    }
  } catch (e) {
    yield put(getArticlesByTimelineIdError, e.message);
    console.log(e);
  }
}

function* getArticleByTimelineSaga() {
  yield takeLatest(GET_ARTICLES_BY_TIMELINE_ID, getArticleByTimelineToServer);
}

export default getArticleByTimelineSaga;
