import 'whatwg-fetch';
import moment from 'moment';
import { hashHistory } from 'react-router';
/*
fetch get方法返回promise
*/
export function get(url,options){
	let querys = "";
    if(options){
       for(let key in options){
            querys += '&' + key  + '='+ options[key];
       } 
    }
    url += querys;
	return  fetch(url, {
        method: 'GET'
    })
}
/*
fetch post方法返回promise
*/
export function post(url,options){
	let form = new FormData();
	if(options){
		for (let key in options) {
        	form.append(key, options[key]);
   		}
	}
    return fetch(url, {
        method: 'POST',
        body:form
    })
}

// 2017-08-25T07:21:06Z 格式化时间格式为  2017-12-06 12:19
export function formatDateTime(datatime,format){
  return moment(datatime, moment.ISO_8601).format(format)
}
//  2017-12-06 12:19 格式化时间格式为  2017-08-25T07:21:06Z
export function formatToUTC(momentobj){
  return momentobj.utc(8).format('YYYY-MM-DDTHH:mm:ss') + 'Z';
}
// 2017-08-25T07:21:06Z 格式化时间格式为  moment对象
export function parseToMoment(datatime){
  return moment(datatime, moment.ISO_8601);
}

export function filesize(limit){  
    var size = "";  
    if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B  
        size = limit.toFixed(2) + "B";    
    }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  
        size = (limit / 1024).toFixed(2) + "KB";              
    }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";  
    }else{ //其他转化成GB  
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";  
    }  
      
    var sizestr = size + "";   
    var len = sizestr.indexOf("\.");  
    var dec = sizestr.substr(len + 1, 2);  
    if(dec == "00"){//当小数点后为00时 去掉小数部分  
        return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
    }  
    return sizestr;  
}  
//处理成cascader需要的格式
export function modifyData(entities){
  return entities.map(function(item,index){
      let {id,name,children} = item;
      if(children && children.length>0){
        children = modifyData(children);
      }
      return {value:id,label:name,children:children}
  })
}

//跳转访客端登录
export function jumpLogin(){
  let tenant_id = localStorage.getItem('tenant_id');
  let url = "/login/tenant_id/"+tenant_id;
  hashHistory.push(url);//跳转至登录
}
//跳转访客端注册
export function jumpRegist(){
  let tenant_id = localStorage.getItem('tenant_id');
  let url = "/regist/tenant_id/"+tenant_id;
  hashHistory.push(url);//跳转至注册
}

// UUID

export const UUID = {
      /**
       * The simplest function to get an UUID string.
       * @returns {string} A version 4 UUID string.
       */
      generate: function(){
        var rand = this._gri,
          hex = this._ha;
        return hex(rand(32), 8) // time_low
          + "-" + hex(rand(16), 4) // time_mid
          + "-" + hex(0x4000 | rand(12), 4) // time_hi_and_version
          + "-" + hex(0x8000 | rand(14), 4) // clock_seq_hi_and_reserved clock_seq_low
          + "-" + hex(rand(48), 12); // node
      },

      /**
       * Returns an unsigned x-bit random integer.
       * @param {int} x A positive integer ranging from 0 to 53, inclusive.
       * @returns {int} An unsigned x-bit random integer (0 <= f(x) < 2^x).
       */
      _gri: function(x){ // _getRandomInt
        if(x < 0){
          return NaN;
        }
        if(x <= 30){
          return (0 | Math.random() * (1 << x));
        }
        if(x <= 53){
          return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << x - 30)) * (1 << 30);
        }
        return NaN;
      },

      /**
       * Converts an integer to a zero-filled hexadecimal string.
       * @param {int} num
       * @param {int} length
       * @returns {string}
       */
      _ha: function(num, length){ // _hexAligner
        var str = num.toString(16),
          i = length - str.length,
          z = "0";
        for(; i > 0; i >>>= 1, z += z){
          if(i & 1){
            str = z + str;
          }
        }
        return str;
      },

    }