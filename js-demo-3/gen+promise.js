var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
    var r1 = yield readFile('a.txt');
    console.log(r1.toString());
    var r2 = yield readFile('b.txt');
    console.log(r2.toString());
};

//单步测试
// var g = gen();

// g.next().value.then(function(data){
//   g.next(data).value.then(function(data){
//     g.next(data);
//   });
// })

function run(gen){
    var g = gen();
    function next(data){
      var result = g.next(data);
      if (result.done) return result.value;
      result.value.then(function(data){
        next(data);
      });
    }
  
    next();
}
  
run(gen);