'use strict';
import {
	applyMiddleware,
	createStore,
	combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducer  = function (state = {
	value:0,
	weatherdata:[],
	city:''
  }, action) {
	switch (action.type) {
	  case 'add':
		var ss = Object.assign({},state);
		ss.value = ss.value +1
		return ss 
	  case 'minus':
		var ss = Object.assign({},state);
		ss.value = ss.value -1
		return ss
	  case 'updateList':
		var ss = Object.assign({},state);
		const {city,data} = action.payload
		ss.weatherdata = data;
		ss.city = city;
		return ss
	  default:
		return state
	}
  }
import {rootSaga} from '../saga/index.weather.js';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
function configureStore() {
	let sagaMiddleware = createSagaMiddleware();
	let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
	sagaMiddleware.run(rootSaga);
	window.store=store;
	return store;
}

export default configureStore;