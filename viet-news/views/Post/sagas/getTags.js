import { takeLatest, call, put, select } from "redux-saga/effects";
import { GET_TAGS } from "../const/tags";
import { getTagsList } from "../../../services/api/tag";
import { getTagsSuccess, getTagsError } from "../actions/tags";

function* getTagsToServer({ tagsList }) {
  try {
    const res = yield call(getTagsList, tagsList);
    if (res.errors === null) {
      yield put(getTagsSuccess(res.data));
    }
  } catch (e) {
    yield put(getTagsError, e.message);
    console.log(e);
  }
}

function* getTagsSaga() {
  yield takeLatest(GET_TAGS, getTagsToServer);
}

export default getTagsSaga;
