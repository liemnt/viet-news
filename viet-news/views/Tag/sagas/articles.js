import { takeLatest, call, put, select } from "redux-saga/effects";
import { getTagArticles } from "../../../services/api/article";
import {
  getArticlesByTagError,
  getArticlesByTagSuccess,
  resetPage
} from "../actions/articles";
import { GET_ARTICLES_BY_TAG } from "../const/articles";
import { selectArticlesByTag } from "../reducers/articles.selector";

function* getArticleByCategoryToServer({ tagId, page }) {
  try {
    const res = yield call(getTagArticles, tagId, page);
    if (res.errors === null) {
      if (page === 1) {
        yield put(
          getArticlesByTagSuccess(res.data.results, page + 1, res.data.count)
        );
      } else {
        const currentArticles = yield select(selectArticlesByTag);
        yield put(
          getArticlesByTagSuccess(
            currentArticles.toJS().concat(res.data.results),
            page + 1,
            res.data.count
          )
        );
      }
    }
  } catch (e) {
    yield put(getArticlesByTagError(), e.message);
    console.log(e);
  }
}

function* getArticleByTagSaga() {
  yield takeLatest(GET_ARTICLES_BY_TAG, getArticleByCategoryToServer);
}

export default getArticleByTagSaga;
