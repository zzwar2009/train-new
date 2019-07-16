var ReactDOM = require("react-dom");
import React, { Component } from 'react';

//父子传递演示
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
        <Child name={this.state.name}/>
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
    const {name} = this.props;
    return (
      <div>
        {name}
      </div>
    );
  }
}

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
);