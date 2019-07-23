

let initialState = {
    count:0
}
export default function(state = initialState,action){
    switch(action.type){
        case 'add':
            state = Object.assign({},state);
            state.count = state.count+1;
            break
        case 'min':
            state = Object.assign({},state);
            state.count = state.count-1;
            break
    }
    return state;
}