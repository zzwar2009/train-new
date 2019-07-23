

let initialState = {
    count:0
}
import * as types from '../action-types';
export default function(state = initialState,action){
    switch(action.type){
        case types.INCREMENT:
            state = Object.assign({},state);
            state.count = state.count+1;
            break
        case types.DECREMENT:
            state = Object.assign({},state);
            state.count = state.count-1;
            break
    }
    return state;
}