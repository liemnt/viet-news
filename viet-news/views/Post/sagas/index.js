import { fork } from "redux-saga/effects";
import getTagsList from "./getTags";
import timelines from "./timelines";
import timeline from "./timeline";

function* newsSaga() {
  yield fork(getTagsList);
  yield fork(timelines);
  yield fork(timeline);
}

export default newsSaga;
