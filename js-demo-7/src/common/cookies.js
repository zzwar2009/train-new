/*global
 escape,unescape
 */
//cookie操作相关函数
var cookies = {};
cookies.addCookie = function(objName, objValue, objHours) {      //添加cookie
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {                               //为时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 24 * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
};
cookies.setCookie = function(name, value) {  //两个参数，一个是cookie的名子，一个是值
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};
cookies.getCookie = function(name) {  //取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
       return unescape(arr[2]);
    }
    return null;
};
cookies.delCookie = function(name) {  //删除cookie
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
};

module.exports = cookies;