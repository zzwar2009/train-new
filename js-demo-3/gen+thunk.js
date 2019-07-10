var fs = require("fs");

// 异步读取
// fs.readFile('a.txt', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });


// Thunk版本的readFile（单参数版本）
var Thunk = function (fileName){
    return function (callback){
        return fs.readFile(fileName, callback); 
    };
};
// var readFileThunk = Thunk('a.txt');
// // readFileThunk(callback);
// readFileThunk(function(err,data){
//     console.log("异步读取: " + data.toString());
// })

var gen = function* (){
  var r1 = yield Thunk('a.txt');
  console.log(r1.toString());
  var r2 = yield Thunk('b.txt');
  console.log(r2.toString());
};


// var g = gen();
// var r1 = g.next();
// console.log(r1)
// r1.value(function(err, data){
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data){
//     if (err) throw err;
//     g.next(data);
//   });
// });


function run(fn) {
    var gen = fn();
    function next(err, data) {
        console.log(data)
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}

run(gen);


