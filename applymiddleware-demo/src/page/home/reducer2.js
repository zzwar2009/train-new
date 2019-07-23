

let initialState = {
    color:'red'
}
export default function(state = initialState,action){
    switch(action.type){
        case 'green':
            state = Object.assign({},state);
            state.color = 'green';
            break
        case 'blue':
            state = Object.assign({},state);
            state.color = 'blue';
            break
    }
    return state;
}