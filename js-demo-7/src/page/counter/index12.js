
import React, { useState, useCallback, useEffect ,useReducer,useContext} from 'react';
const CounterContext = React.createContext();

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
function Counter(){
  let {state,dispatch} = useContext(CounterContext);
  return (
      <>
        <p>{state.number}</p>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
  )
}
export default function App(){
    const [state, dispatch] = useReducer(reducer, {number:0});
    return (
        <CounterContext.Provider value={{state,dispatch}}>
            <Counter/>
        </CounterContext.Provider>
    )

}