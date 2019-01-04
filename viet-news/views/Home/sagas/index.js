import { fork } from "redux-saga/effects";
import timelines from "./timelines";
import articles from "./articles";
import latestArticles from "./latestArticles";
import categoryArticles from "./categoryArticles";

function* homeSaga() {
  yield fork(timelines);
  yield fork(articles);
  yield fork(latestArticles);
  yield fork(categoryArticles);
}

export default homeSaga;
