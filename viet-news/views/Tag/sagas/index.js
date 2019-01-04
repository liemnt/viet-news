import { fork } from "redux-saga/effects";
import getArticlesByTagSaga from "./articles";

function* homeSaga() {
  yield fork(getArticlesByTagSaga);
}

export default homeSaga;
