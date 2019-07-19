/**
    参数说明： 
        actionCreators: action create函数，可以是一个单函数，也可以是一个对象，这个对象的所有元素都是action create函数
        dispatch: store.dispatch方法
*/
import bindActionCreator from './bindActionCreator'
export default function bindActionCreators(actionCreators, dispatch) {
    // 如果actionCreators是一个函数的话，就调用bindActionCreator方法对action create函数和dispatch进行绑定
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch)
    }
    // actionCreators必须是函数或者对象中的一种，且不能是null
    if (typeof actionCreators !== 'object' || actionCreators === null) {
      throw new Error(
        `bindActionCreators expected an object or a function, instead received ${actionCreators === null ? 'null' : typeof actionCreators}. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
      )
    }
  
    // 获取所有action create函数的名字
    const keys = Object.keys(actionCreators)
    // 保存dispatch和action create函数进行绑定之后的集合
    const boundActionCreators = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const actionCreator = actionCreators[key]
      // 排除值不是函数的action create
      if (typeof actionCreator === 'function') {
        // 进行绑定
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
      }
    }
    // 返回绑定之后的对象
    /**
        boundActionCreators的基本形式就是
        {
        actionCreator: function() {dispatch(actionCreator.apply(this, arguments))}
        }
    */
    return boundActionCreators
  }
  