function* gen(x){
    var y = yield x + 2;
    y = yield y + 2;
    console.log(1111)
    return y;
  }
  
  var g = gen(1);
  //第一个 next 方法的 value 属性，返回表达式 x + 2 的值（3）。第二个 next 方法带有参数2，这个参数可以传入 Generator 函数，作为上个阶段异步任务的返回结果，被函数体内的变量 y 接收。因此，这一步的 value 属性，返回的就是2（变量 y 的值）
  console.log(g.next()) // { value: 3, done: false }
  console.log(g.next(200)) // { value: 2, done: true }
  console.log(g.next(111)) // { value: 2, done: true }