import { fork } from "redux-saga/effects";
import getArticlesByCategorySaga from "./articles";

function* homeSaga() {
  yield fork(getArticlesByCategorySaga);
}

export default homeSaga;
