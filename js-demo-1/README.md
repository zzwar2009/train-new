### js基础 
  1. http://www.w3school.com.cn/js/index.asp
  2. 权威文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference

### js 版本 
   1. ES5 ES6

### babel 
   1. babel src ./lib --watch  (大概是这样)

### 基础问题
   1. 原型和原型链
   2. 类数组 和 arguments ，转化数组
      
   3. 我们回顾下 new 的实现步骤：
    首先新建一个对象
    然后将对象的原型指向 Person.prototype
    然后 Person.apply(obj)
    返回这个对象
   4. call && apply  fn.call(obj,param1,...param)  fn.apply(obj,[...param])
   5. 闭包
   6. bind  fn.bind(obj)

### 深入问题

