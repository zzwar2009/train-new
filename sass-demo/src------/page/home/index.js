import React, { Component } from 'react';
// var ReactDOM = require("react-dom");
import ReactDOM, { findDOMNode } from 'react-dom'
import './index.scss';
import {createStore }from './redux.js';
import reducer from './reducerCombin.js';
let store = createStore(reducer)
class Home extends Component {
	constructor(props) {
      super(props);
      
      this.state = store.getState();
  }

  componentWillMount(){
  }
  componentDidMount(){
    let that = this;
    this.unscribe = store.subscribe(that.update.bind(that));
  }
  componentWillUnmount(){
    this.unscribe();
  }
  update(){
    this.setState(
      store.getState()
    )
  }
  add(){
    store.dispatch({
      type:'add',
      count:2
    })
  }
  min(){
    store.dispatch({
      type:'min',
      count:2
    })
  }

  green(){
    store.dispatch({
      type:'green',
      count:2
    })
  }
  blue(){
    store.dispatch({
      type:'blue',
      count:2
    })
  }
  render() {
      let {countObj,colorObj} = this.state;
      console.log(countObj.count)
      return (
          <div className='main-wrap'>
            <p>手写redux 成功！！！ </p>
            <p style={{color:colorObj.color}}>{countObj.count}</p>
            <button onClick={this.add.bind(this)}>+</button>
            <button onClick={this.min.bind(this)}>-</button>  
            <button onClick={this.blue.bind(this)}>blue</button>  
            <button onClick={this.green.bind(this)}>green</button>    
          </div>
      );
  }
}

export default (Home);