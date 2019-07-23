//判断非空
const validate = {
    isEmpty:function(str){
        return str == "" || str == undefined;
    },
    isEmail:function(str){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    },
    isPhoneNumber:function(str){
        var reg = /^1[34578]\d{9}$/
        return reg.test(str);
    },
    isSame:function(str1,str2){
        return str1 == str2;
    }
}
export default validate;