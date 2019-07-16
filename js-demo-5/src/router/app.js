var ReactDOM = require("react-dom");
import React, { Component } from 'react';

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
    this.setState({
      count:this.state.count+1
    })
  }
  minus(){
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    );
  }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);