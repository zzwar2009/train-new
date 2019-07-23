
// function* rootSaga(){
//     console.log(2222);
// }

// export default {rootSaga};


import {takeEvery,put,take,select,all,call} from 'redux-saga/effects';
const delay=ms => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    },ms);
});
export function* increment(action) {
    yield delay(1000);
    yield put({type:'add'});
}

export function* rootSaga() {
   
    //  yield takeEvery('asyncAdd',increment);

    //最多加3次
    // for (let i=0;i<3;i++){
    //     let action = yield take('asyncAdd');//接管了流程逻辑是在下面

    //     const state = yield select();
    //     console.log(state);
    //     // let action = yield take('asyncAdd');

    //     yield put({type:'add'});
        
    // }
    // console.log('已经达到最大值');


    // yield all([loggerWatcher(),incrementWatcher()]);
}



