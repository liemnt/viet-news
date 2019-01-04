import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import homeSaga from "./views/Home/sagas/index";
import categorySaga from "./views/Category/sagas/index";

es6promise.polyfill();

function* rootSaga() {
  yield all([homeSaga(), categorySaga()]);
}

export default rootSaga;
