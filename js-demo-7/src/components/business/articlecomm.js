import React, { Component } from 'react';
// var ReactDOM = require("react-dom");
import ReactDOM, { findDOMNode } from 'react-dom'
import {defaultAvatar} from 'common/common';
import { connect } from 'react-redux';
import {starComm,starcancelComm} from 'actions/article';
class Comm extends Component {
	constructor(props) {
      super(props);
      this.state = {
        zaned:false
	  };
  }

  componentWillMount(){


  }
  componentDidMount(){
    let {stared,starCount} = this.props.item;
    this.setState({
      stared,
      starCount
    });
  }

  zanClick(id){
    //不能重复点赞
    let {stared,starCount} = this.state;
    if(stared == 0){
        //赞
        starComm(id)
        this.setState({
            stared:1,
            starCount:starCount+1
        })
    }else{
        //踩
        starcancelComm(id);
        this.setState({
            stared:0,
            starCount:starCount-1
        })
    }
  }
  render() {
      let item = this.props.item;
      let avatar = item.workerAvatar || defaultAvatar;
      item.workerName = item.workerName || '暂无名字';

      let that = this;
      let {stared,starCount} = this.state;
      return (
        <div className="comm-item" key={item.id}>
              <div className="comm-info">
                  <div className="userinfo">
                      <img className ="user-photo" src={avatar} alt=""/>
                      <span className="username">{item.workerName}</span>
                  </div>
                  <div className="comm-zan" onClick={function(){ return that.zanClick(item.id)}}>
                      {
                          stared ? <span className="zan-icon zaned"></span> :
                          <span className="zan-icon zan"></span>
                      }
                      <span className="zan-count">{starCount}</span>
                  </div>
              </div>
              <div className="comm-desc">
              {item.content}
              </div>
        </div>
      );
  }
}



export default Comm;