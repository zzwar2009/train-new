import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import  {Provider,connect} from 'react-redux';
import './index.scss';
class Counter extends Component {
	constructor(props) {
      super(props);
  }

  componentWillMount(){
  }
  componentDidMount(){
  
  }
  componentWillUnmount(){
    
  }

  render() {
      let {onMinusClick,value,onIncreaseClick,onAsyncIncreaseClick} = this.props;
      return (
          <div className='main-wrap'>
            <p>{value}</p>
            <button onClick={onIncreaseClick}>+</button>
            <button onClick={onMinusClick}>-</button>

            <button onClick={onAsyncIncreaseClick}>异步+</button>    
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
const asyncIncreaseAction = {type:'asyncAdd'}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onMinusClick: () => dispatch(minusAction),
    onAsyncIncreaseClick: () => dispatch(asyncIncreaseAction)
  }
}

let CounterWrapComponent = connect(mapStateToProps,mapDispatchToProps)(Counter)
export default CounterWrapComponent;