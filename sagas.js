/**
 * Created by nalantianyi on 2017/2/4.
 */
import {put,call} from 'redux-saga/effects';
import {delay, takeEvery} from 'redux-saga';
//export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export function* incrementAsync() {
    yield call(delay,1000);
    yield put({type: 'INCREMENT'});
}
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
    yield [
        watchIncrementAsync()
    ]
}