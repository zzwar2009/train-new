var ReactDOM = require("react-dom");
import React, { Component } from 'react';


import { createStore } from 'redux';


let count  = function (state = {
  value:0
}, action) {
  switch (action.type) {
    case 'add':
      var ss = Object.assign({},state);
      ss.value = ss.value +1
      return ss 
    case 'minus':
      state.value = state.value -1
      return state
    default:
      return state
  }
}


const store = createStore(count);

console.log(store)
// store.dispatch({
//   type: '',
//   payload: 'Learn Redux'
// });


class Counter extends Component {
	constructor(props) {
      super(props);
      this.state = {
        count:0
      };
    }

  componentWillMount(){

  }
  componentDidMount(){
    
  }
  add(){
    
  }
  minus(){
    
  }
  render() {
    const { count ,onAdd,onMin} = this.props;
    console.log(count)
    return (
      <div>
        <p>{count.value}</p>
        <button onClick={onAdd}>+</button>
        <button onClick={onMin}>-</button>
      </div>
    );
  }
}

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    count={store.getState()}
    onAdd={() => store.dispatch({ type: 'add' })}
    onMin={() => store.dispatch({ type: 'minus' })}
  />,
  rootEl
)


render()
store.subscribe(render)
console.log(store.getState())