import { all } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import homeSaga from "./views/Home/sagas/index";
import categorySaga from "./views/Category/sagas/index";
import newsSaga from "./views/Post/sagas/index";
import tagSaga from "./views/Tag/sagas/index";

es6promise.polyfill();

function* rootSaga() {
  yield all([homeSaga(), categorySaga(), newsSaga(), tagSaga()]);
}

export default rootSaga;
