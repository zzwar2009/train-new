export default function bindActionCreator(actionCreator, dispatch) {
    // 这个函数的主要作用就是返回一个函数，当我们调用返回的这个函数的时候，就会自动的dispatch对应的action
    // 这一块其实可以更改成如下这种形式更好
    // return function(...args) {return dispatch(actionCreator.apply(this, args))}
    return function() { return dispatch(actionCreator.apply(this, arguments)) }
  }