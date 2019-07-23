import {put,take,takeEvery,call,all} from 'redux-saga/effects';

const delay=ms => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    },ms);
});
export function* increment() {
    yield call(delay,1000);
    yield put({type:'add'});
}

export function* incrementWatcher() {
    yield takeEvery('asyncAdd',increment);
}
export function* logger(action) {
    console.log('action',action);
}
export function* loggerWatcher() {
    yield takeEvery('asyncAdd',logger);
}

export function* rootSaga() {
    yield all([loggerWatcher(),incrementWatcher()]);
}