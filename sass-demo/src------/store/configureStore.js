'use strict';
import {
	createStore,
	combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index.js';

function configureStore(onComplete) {

	const store = createStore(reducers);
	window.store = store;
	// console.log(store.getState())
	//onComplete();
	return store;
}

export default configureStore;