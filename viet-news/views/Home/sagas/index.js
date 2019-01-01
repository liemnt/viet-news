import { fork } from "redux-saga/effects";
import timelines from "./timelines";
import articles from "./articles";

function* homeSaga() {
  yield fork(timelines);
  yield fork(articles);
}

export default homeSaga;
