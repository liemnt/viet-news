import { fork } from "redux-saga/effects";
import timelines from "./timelines";
import articles from "./articles";
import latestArticles from "./latestArticles";

function* homeSaga() {
  yield fork(timelines);
  yield fork(articles);
  yield fork(latestArticles);
}

export default homeSaga;
