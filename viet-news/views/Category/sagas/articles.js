import { takeLatest, call, put, select } from "redux-saga/effects";
import { getCategoryArticles } from "../../../services/api/article";
import {
  getArticlesByCategorySuccess,
  getArticlesByCategoryError,
  resetPage
} from "../actions/articles";
import { GET_ARTICLES_BY_CATEGORY } from "../const/articles";
import { selectArticlesByCategory } from "../reducers/articles.selector";

function* getArticleByCategoryToServer({ categoryId, page }) {
  try {
    // yield put(resetPage());
    const res = yield call(getCategoryArticles, categoryId, page);
    if (res.errors === null) {
      if (page === 1) {
        yield put(
          getArticlesByCategorySuccess(
            res.data.results,
            page + 1,
            res.data.count
          )
        );
      } else {
        const currentArticles = yield select(selectArticlesByCategory);
        yield put(
          getArticlesByCategorySuccess(
            currentArticles.toJS().concat(res.data.results),
            page + 1,
            res.data.count
          )
        );
      }
    }
  } catch (e) {
    yield put(getArticlesByCategoryError, e.message);
    console.log(e);
  }
}

function* getArticleByCategorySaga() {
  yield takeLatest(GET_ARTICLES_BY_CATEGORY, getArticleByCategoryToServer);
}

export default getArticleByCategorySaga;
