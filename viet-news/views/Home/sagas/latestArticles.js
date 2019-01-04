import { takeLatest, call, put } from "redux-saga/effects";
import { getLatestArticles } from "../../../services/api/article";
import { getLatestArticleSuccess } from "../actions/latestArticles";
import { GET_LATEST_ARTICLE } from "../const/latestArticles";

function* getLatestArticleToServer() {
  try {
    const res = yield call(getLatestArticles, 1);
    if (res.errors === null) {
      yield put(getLatestArticleSuccess(res.data.results));
    }
  } catch (e) {
    console.log(e);
  }
}

function* getLatestArticleSaga() {
  yield takeLatest(GET_LATEST_ARTICLE, getLatestArticleToServer);
}

export default getLatestArticleSaga;
