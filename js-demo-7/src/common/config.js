window.domainname = location.hostname;
let ajaxurl;
//在线上前后端用都是https 用的同一个域名
if(~domainname.indexOf('localhost') || ~domainname.indexOf('172.26')){
    //local
    ajaxurl = "https://www.tl2c.cn/";
    // ajaxurl = "http://rsh7ue.natappfree.cc/";

}else if(~domainname.indexOf('www.tl2c.cn')){
    //demo
    ajaxurl = "https://www.tl2c.cn/";
}else{
    ajaxurl = "https://www.tl2c.cn/";
    //online.  ticket.easemob.com
}
export {ajaxurl}