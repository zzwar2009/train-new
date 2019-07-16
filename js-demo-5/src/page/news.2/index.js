import React, { Component } from 'react';
// var ReactDOM = require("react-dom");
import ReactDOM, { findDOMNode } from 'react-dom'
import './index.scss';
import {getNews,getCommList} from 'actions/news';
import { connect } from 'react-redux';
let that;
import Comment from 'business/comment';
// function closePage() {
//     console.log('==========native=========================')
//     console.log(JSON.stringify(bmnative))
//     bmnative.closePage();
// }
// function fireEvent() {
//     bmnative.fireEvent('event', '11111');
// }
// function getToken(){
//     bmnative.getToken().then(function(data){
//         alert(data);
//     });
//     // bmnative.on('token',(params) => {
//     //     // params 为触发该事件所传的参数
//     //     alert(params)
//     // });
// }

//自动加载更多(测试前端分页)
function autoLoadData(flag) {
    var body = document.body;
    var h = screen.availHeight;
    var sh = body.scrollHeight;
    var top = document.documentElement.scrollTop;
    if(sh<h+top+2){
        $(document).unbind('scroll');
        var nextpage = parseInt(that.state.pageNum)+1;
        
       
        that.getCommData(nextpage)
        

        // if (that.props.nomore){
        //     $(document).unbind('scroll');
        //     setTimeout(function(){
        //         $('#btn-more').hide();
        //     },1500)
        // }

    }
};
class News extends Component {
	constructor(props) {
      super(props);
      that = this;
      this.pageSize = 20;
      this.state = {
        "pageNum": 1,
      };
    }

  componentWillMount(){


  }
  componentDidMount(){
    let title = this.props.params.title;
    let token = this.props.params.token;
    window.token = token;
    let id = this.props.params.id;
    this.id = id;
    this.token = token;
    this.title = title;
    document.title = title;
    this.getCommData(1)
    getNews(id,token).then(function(resData){
        if(resData && resData.errno == 0){
            
            that.setState({
                banner:resData.data.thumbnail,
                content:resData.data.content,
                title:resData.data.title
            })
        } 
          
    });
    
    $(document).scroll(function(){
        autoLoadData();
    });

    
  }
  getCommData(pageNum){
      let that = this;
       $(document).unbind('scroll');
        if(pageNum != 1){
            $('.new-dj-btn').show();
        }
      //获取并
      getCommList(this.token,{
        "newsId": this.id,
        "pageNum": pageNum,
        "pageSize": this.pageSize
     }).then(function(resData){
        if(resData && resData.errno == 0){
            let totalpage = Math.ceil(resData.data.total/that.pageSize);
            if(pageNum == 1){
                that.setState({
                    commentData:resData.data.items,
                    totalpage:totalpage,
                    pageNum:pageNum
                })
            }else{
                let newCommData = that.state.commentData.concat(resData.data.items);
                that.setState({
                    commentData:newCommData,
                    totalpage:totalpage,
                    pageNum:pageNum
                });
                $('.new-dj-btn').hide();
            }
            if(totalpage > pageNum){
              setTimeout(function(){
                $(document).scroll(function(){
                    autoLoadData();
                });
              },300)
            }else{
              $('.new-dj-btn').hide();
            }
           
        }
     });
  }
  test(){
    // closePage();//测试交互
    // fireEvent()
  }
  render() {
    let {banner,content,title,commentData,pageNum} = this.state;
    let that = this;
    let commlist = []
    commlist = commentData && commentData.map(function(item){
      return <Comment item={item} key={item.id}/>
    })
    return (
      <div>
          <div className="article-wrap">
          <div className="article-tit">
              {title}
          </div>
          <div className="art-content" dangerouslySetInnerHTML={{__html: content}}></div>
          <div className="comm-wrap">
            {commentData && commentData.length>0 ?<div className="comm-tit">全部评论</div> :''}
            {commlist}
            <div className="new-dj-btn hide" >
                <i></i>
                <span>正在加载...</span>
            </div>
          </div>
          </div>
      </div>
    );
  }
}



export default News;