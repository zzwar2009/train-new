### redux-saga介绍

redux-saga 是一个 redux 的中间件，而中间件的作用是为 redux 提供额外的功能。
在 reducers 中的所有操作都是同步的并且是纯粹的，即 reducer 都是纯函数，纯函数是指一个函数的返回结果只依赖于它的参数，并且在执行过程中不会对外部产生副作用，即给它传什么，就吐出什么。
但是在实际的应用开发中，我们希望做一些异步的（如Ajax请求）且不纯粹的操作（如改变外部的状态），这些在函数式编程范式中被称为“副作用”。
redux-saga 就是用来处理上述副作用（异步任务）的一个中间件。它是一个接收事件，并可能触发新事件的过程管理者，为你的应用管理复杂的流程。

### 什么是中间件
   It provides a third-party extension point between dispatching an action, and the moment it reaches
the reducer.


### 实现中间件
const doNothingMidddleware = (dispatch, getState) => next => action => next(action)

redux-thunk 源码
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```
### why
   1. 偏向于控制流程
   2. 控制代码写在一起 清晰
   3. 便于测试

### redux-saga使用

   1. demo1 异步加一
   2. api介绍  call  take takeevery select 
   3. demo2 获取天气



### 资料
1. https://github.com/redux-saga/redux-saga
2. https://www.jianshu.com/p/ae7b5a2f78ae


