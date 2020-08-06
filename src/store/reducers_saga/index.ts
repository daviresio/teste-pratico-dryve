import {all} from 'redux-saga/effects'
import {carSaga} from "./car";

function* rootSaga() {
    yield all([
        ...carSaga(),
    ])
}

export default rootSaga