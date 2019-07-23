const initialState = 0;
import React, { useState, useCallback, useEffect ,useReducer} from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {number: state.number + 1};
    case 'decrement':
      return {number: state.number - 1};
    default:
      throw new Error();
  }
}
function init(initialState){
    return {number:initialState};
}
export default function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState,init);
    return (
        <>
          Count: {state.number}
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}