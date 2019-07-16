import React from 'react';
import {bindActionCreators} from '../redux'
let Context = React.createContext();
// Provider的作用就是把store 定義
class Provider extends React.Component {
  render() {
    let store = this.props.store;
    return <Context.Provider value={{ store }}>
      {this.props.children}
    </Context.Provider>
  }
}
// connect是一个高阶函数 返回的是一个组件
let connect = (mapStateToProps,mapDispatchToProps) => (Component) => {
  // connect他是一个高阶组件
  class Proxy extends React.Component {
    // 把当前用传递的函数 执行 并且把结果作为状态放在当前的代理组件上面
    state = mapStateToProps(this.props.store.getState());
    componentWillMount(){
      this.unsub = this.props.store.subscribe(()=>{
        // 再去调用用户的函数执行 把执行结果 作为新的状态
        this.setState(mapStateToProps(this.props.store.getState()))
      })
    }
    componentWillUnmount(){
      this.unsub(); // 取消订阅
    }
    render(){
      let dispatchs 
      if (typeof mapDispatchToProps === 'function'){
        dispatchs = mapDispatchToProps(this.props.store.dispatch);
      }else{
        // 如果绑定的是一个对象，就让这个对象使用bindActionCreatros进行绑定
        dispatchs = bindActionCreators(mapDispatchToProps,this.props.store.dispatch);
      }
      return <Component {...this.state} {...dispatchs}></Component>
    }
  }
  return ()=>{
    return <Context.Consumer>
      {({ store }) => {
        return <Proxy store={store}></Proxy>  
      }}
    </Context.Consumer>
  }
}
export { Provider ,connect};