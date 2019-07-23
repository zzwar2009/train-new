import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
function Counter(){
    const [number,setNumber] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `你点击了${number}次`;

        return ()=>{
            //返回销毁effect的回调函数，可以在这里做销毁操作
            
         } 
    });
    return (
        <>
            <p>{number}</p>
            <button onClick={()=>setNumber(number+1)}>+</button>
        </>
    )
}
export default Counter;
// useEffect 实现版本