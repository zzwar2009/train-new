import "@babel/polyfill";
var ReactDOM = require("react-dom");
import React, { Component } from 'react';
import  {Provider,connect} from 'react-redux';
import { createStore } from 'redux'


let count  = function (state = {
  value:0
}, action) {
  switch (action.type) {
    case 'add':
      var ss = Object.assign({},state);
      ss.value = ss.value +1
      return ss 
    case 'minus':
      // state.value = state.value -1;
      var ss = Object.assign({},state);
      ss.value = ss.value -1
      return ss 
    default:
      return state
  }
}

const store = createStore(count);
window.state = store.getState();
class Counter extends Component {
	constructor(props) {
      super(props);
      this.state = {
      };
    }

  componentWillMount(){

  }
  componentDidMount(){
    
  }
  // add(){
  //   this.props.dispatch({ type: 'add' })
  // }
  // minus(){
  //   this.props.dispatch({ type: 'minus' })
  // }
 
  render() {
    const { value ,onIncreaseClick,onMinusClick} = this.props;
    return (
      <div>
        <p>{value}</p>
        <button onClick={onIncreaseClick}>+</button>
        <button onClick={onMinusClick}>-</button>
      </div>
    );
  }
}
  
function mapStateToProps(state){
  return state;
}
// Action Creator
const increaseAction = { type: 'add' }
const minusAction = { type: 'minus' }

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onMinusClick: () => dispatch(minusAction)
  }
}

let CounterWrapComponent = connect(mapStateToProps,mapDispatchToProps)(Counter)
ReactDOM.render(
    <Provider store={store}>
        <CounterWrapComponent/>
    </Provider>,
    document.getElementById('root')
);