
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


// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}


function request(){
    return ajax('GET', 'https://www.tianqiapi.com/api/');
}

export function* loadData(action) {

    const response = yield call(request,action.payload);

    const { city, data} = JSON.parse(response);
    yield put({
        type: 'updateList',
        payload: {
            data,
            city
        },
    });

}

export function* rootSaga() {
    yield takeEvery('getWeather',loadData);
}



