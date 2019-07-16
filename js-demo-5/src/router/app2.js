var ReactDOM = require("react-dom");
import React, { Component } from 'react';

//多层级传递演示
let defaultValue = {}
const {Provider, Consumer} = React.createContext(defaultValue);

//react-redux connect原理就是利用了这个
class Grandpa extends Component {
	constructor(props) {
      super(props);
      this.state = {
          name:'我是爷爷'
      };
    }

  componentWillMount(){

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <Provider value={{'name':this.state.name,'age':33}}>
        <Parent/>
      </Provider>
    );
  }
}

class Parent extends Component {
	constructor(props) {
      super(props);
      this.state = {
          name:'我是父'
      };
    }

  componentWillMount(){

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Child/>
      </div>
    );
  }
}

class Child extends Component {
	constructor(props) {
      super(props);
      this.state = {
        
      };
    }

  componentWillMount(){

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <Consumer>
        {
          (value) => {
            return <div>{value.name}{value.age}</div>
          }
        }
      </Consumer>
    );
  }
}

ReactDOM.render(
    <Grandpa/>,
    document.getElementById('root')
);