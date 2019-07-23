import * as types from '../action-types';
export default {
    add() {
        return {type: types.INCREMENT};
    },
    minus() {
        return {type: types.DECREMENT};
    }
}