import { fork } from "redux-saga/effects";
import getTagsList from "./getTags";

function* newsSaga() {
  yield fork(getTagsList);
}

export default newsSaga;
