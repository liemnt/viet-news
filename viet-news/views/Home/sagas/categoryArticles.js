import { takeEvery, call, put } from "redux-saga/effects";
import { getCategoryArticles } from "../../../services/api/article";
import {
  getCategoryArticlesError,
  getCategoryArticlesSuccess
} from "../actions/categoryArticles";
import { GET_CATEGORY_ARTICLES } from "../const/categoryArticles";

function* getCategoryArticlesToServer({ category }) {
  try {
    const res = yield call(getCategoryArticles, category.id, 1);
    if (res.errors === null) {
      yield put(
        getCategoryArticlesSuccess({
          ...category,
          data: res.data.results
        })
      );
    }
  } catch (e) {
    console.log(e);
    yield put(getCategoryArticlesError(error.message));
  }
}

function* getCategoryArticlesSaga() {
  yield takeEvery(GET_CATEGORY_ARTICLES, getCategoryArticlesToServer);
}

export default getCategoryArticlesSaga;
