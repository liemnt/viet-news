import {takeLatest, call} from 'redux-saga/effects';
import {GET_ALL_TIMELINE} from "./const";
import {getAllTimelines} from "../../services/api/timeline";
import {getAllTimelineSuccess} from "./actions";

function* getAllTimelineToServer(){
    const res  = yield call(getAllTimelines);
    if (res.errors === null){
        yield put(getAllTimelineSuccess(res.data));
    }
}

function* getAllTimelineFlow() {
    yield takeLatest(GET_ALL_TIMELINE, getAllTimelineToServer)
}

export default getAllTimelineFlow;