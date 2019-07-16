import $ from 'jquery';
import { hashHistory } from 'react-router';
import {ajaxurl} from '../common/config.js';
// 新增ChannelRules
// export function createChannelRules(data){
//   let tenant_id = localStorage.getItem('tenant_id');
//   let url = ajaxurl + "v1/ticket/"+tenant_id+"/channel_rules";
//   return $.ajax({
//           method: 'POST',
//           url: url,
//           data:JSON.stringify(data),
//           contentType:'application/json',
//           xhrFields: {
//                 withCredentials: true
//             }
//         })
//         .fail(function(res){
//           if(res.status==401){
//             hashHistory.push("/login");
//           }
//         })  
// }
//获取所有ChannelRules
// export function getChannelRulesList(queryData) {
//     return (dispatch) => {
//         let tenant_id = localStorage.getItem('tenant_id');
//         let url = ajaxurl + "v1/ticket/"+tenant_id+"/channel_rules";
//         $.ajax({
//           method: 'GET',
//           url: url,
//           data:queryData,
//           xhrFields: {
//                 withCredentials: true
//             },
//         }).then(function(result){
//             if(result.status == "OK"){
//                 dispatch({type: CHANNELRULELIST, data: result});
//             }
            
//         })
//         .fail(function(res){
//           if(res.status==401){
//             hashHistory.push("/login");
//           }
//         })        
        
//     }
// }
// 获取指定ChannelRule
export function getNews(id,token){
  // var ajaxurl = 'https://www.gh-cms.com/'
  let url = `/app/article/detail`;
  return $.ajax({
        method: 'POST',
        url: url,
        // dataType:'json',
        headers: {
          // 'X-TMACW-APP-Token': '87cd93f318d04712ac8ac5a75fcc8e0c',
          // 'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json;charset=utf8'
        },
        beforeSend:function(xhr){
          xhr.setRequestHeader('X-TMACW-APP-Token',token)
        },
        xhrFields: {
          withCredentials: true
        },
        // data:{
        //   'id':id
        // }
        data: JSON.stringify({
          "id": id,
        })
      })
  
         
}
export function getCommList(token,queryData){
  // var ajaxurl = 'https://www.gh-cms.com/'
  let url = `/app/article/commentList`;
  return $.ajax({
        method: 'POST',
        url: url,
        // dataType:'json',
        headers: {
          // 'X-TMACW-APP-Token': '87cd93f318d04712ac8ac5a75fcc8e0c',
          // 'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json;charset=utf8'
        },
        beforeSend:function(xhr){
          xhr.setRequestHeader('X-TMACW-APP-Token',token)
        },
        xhrFields: {
          withCredentials: true
        },
        // data:{
        //   'id':id
        // }
        data: JSON.stringify(queryData)
      })
  
         
}

export function starComm(id){
  // var ajaxurl = 'https://www.gh-cms.com/'
  let url = `/app/article/comment/star`;
  return $.ajax({
        method: 'POST',
        url: url,
        // dataType:'json',
        headers: {
          // 'X-TMACW-APP-Token': '87cd93f318d04712ac8ac5a75fcc8e0c',
          // 'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json;charset=utf8'
        },
        beforeSend:function(xhr){
          xhr.setRequestHeader('X-TMACW-APP-Token',token)
        },
        xhrFields: {
          withCredentials: true
        },
        // data:{
        //   'id':id
        // }
        data: JSON.stringify({
          'id':id
        })
      })
  
         
}

export function starcancelComm(id){
  // var ajaxurl = 'https://www.gh-cms.com/'
  let url = `/app/article/comment/star-cancel`;
  return $.ajax({
        method: 'POST',
        url: url,
        // dataType:'json',
        headers: {
          // 'X-TMACW-APP-Token': '87cd93f318d04712ac8ac5a75fcc8e0c',
          // 'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json;charset=utf8'
        },
        beforeSend:function(xhr){
          xhr.setRequestHeader('X-TMACW-APP-Token',token)
        },
        xhrFields: {
          withCredentials: true
        },
        // data:{
        //   'id':id
        // }
        data: JSON.stringify({
          'id':id
        })
      })
  
         
}


// 编辑ChannelRule
// export function updateChannelRule(data, id){
//   let tenant_id = localStorage.getItem('tenant_id');
//   let url = `${ajaxurl}v1/ticket/${tenant_id}/channel_rules/${id}`;
//   return $.ajax({
//           method: 'PUT',
//           url: url,
//           data:JSON.stringify(data),
//           contentType:'application/json',
//           xhrFields: {
//                 withCredentials: true
//             }
//         })
//         .fail(function(res){
//           if(res.status==401){
//             hashHistory.push("/login");
//           }
//         })    
// }


