'use strict';
import {
	// applyMiddleware,
	createStore,
	combineReducers
} from 'redux';
import applyMiddleware from './applyMiddleware';
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
	let store = applyMiddleware(...[logger,logger1,sagaMiddleware])(createStore)(reducer);
	sagaMiddleware.run(rootSaga);
	window.store=store;
	return store;
}


function logger({ getState ,dispatch}) {
	return (next) => (action) => {
	  console.log('will dispatch', action)     
  
	  // 调用 middleware 链中下一个 middleware 的 dispatch。
	  console.log('logger',next)
	  let returnValue = next(action)
	  console.log('logger',returnValue)
	  console.log('state after dispatch', getState())
  
	  // 一般会是 action 本身，除非
	  // 后面的 middleware 修改了它。
	  return returnValue
	}
  }
  function logger1({ getState ,dispatch}) {
	return (next) => (action) => {
		
	  console.log('will dispatch1===', action)     
  
	  // 调用 middleware 链中下一个 middleware 的 dispatch。
	  console.log('logger1===',next)
	  let returnValue = next(action)
	  console.log('logger1===',returnValue)
  
	  console.log('state after dispatch1===', getState())
  
	  // 一般会是 action 本身，除非
	  // 后面的 middleware 修改了它。
	  return returnValue
	}
  }
export default configureStore;