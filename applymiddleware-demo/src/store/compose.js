
// function add1(str){
//     return '1'+str;
// }
// function add2(str){
//     return '2'+str;
// }
// function add3(str){
//     return '3'+str;
// }


// // console.log(compose(add3).toString())
// // let result = compose(add3,add2,add1)('zfpx');
// // console.log(result);

// export default function compose(...funcs) {
//     if (funcs.length === 0) {
//         return arg => arg
//     }

//     if (funcs.length === 1) {
//         return funcs[0]
//     }

//     return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }

export default function compose(...funcs){
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce(
        // (a,b)=>(...args)=>a(b(...args))

        function(a,b){
            debugger
            return function(...args){
                debugger
                var res = b(...args);
                var res1 = a(res);
                return res1
            }
        }
    );
}
