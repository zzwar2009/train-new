import compose from './compose'
export default function applyMiddleware(...middlewares) {
 return createStore=>(...args)=>{
     const store = createStore(...args);
     let dispatch = ()=>{
         throw new Error('不允许派发正在构建中的中间件!');
     }
     const middlewareAPI= {
         getState:store.getState,
         dispatch:(...args)=>dispatch(...args)
     }
     const chain = middlewares.map(middleware=>middleware(middlewareAPI));

    // function xx ({getState,dispatch}){
    //     return function(next){
    //         return next({getstat,dispatch})
    //     }
    // }
     console.log(chain);
    //  console.log(compose(...chain).toString());
    // console.log(compose(...chain))
     dispatch = compose(...chain)(store.dispatch);
     console.log(dispatch.toString())
     return {
         ...store,
         dispatch
     }
 };
}