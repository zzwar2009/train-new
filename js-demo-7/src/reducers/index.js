import { combineReducers } from '../util/redux.js';
import countObj from './reducer1';
import colorObj from './reducer2';
const reducers = combineReducers({
    countObj,colorObj
});

export default reducers;