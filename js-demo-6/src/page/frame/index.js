import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
class Frame extends Component {
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
        <div>
          {/* <span className='iconfont'>&#xe659;</span> */}
          {this.props.children}
          <div className='bottomDiv'></div>
        </div>
      )
  }
}

export default Frame;