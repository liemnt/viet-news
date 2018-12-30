import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import homeSaga from './views/Home/saga'

es6promise.polyfill()

function * rootSaga () {
    yield all([
        homeSaga(),
    ])
}

export default rootSaga