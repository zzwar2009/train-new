import React,{useState,useRef} from 'react';


// props 获取，getState可以传方法
function Counter4(){
  let [number,setNumber] = useState(0);
  function lazy(){
      setTimeout(() => {
          //setNumber(number+1);
          setNumber(number=>number+1);
      }, 3000);
  }
  return (
      <>
         <p>{number}</p>
         <button onClick={()=>setNumber(number+1)}>+</button>
         <button onClick={lazy}>lazy</button>
      </>
  )
}

function Counter5(props){
  console.log('Counter5 render');
  function getInitState(){
      return {number:props.number};
  }
  let [counter,setCounter] = useState(getInitState);
  //如果你修改状态的时候，直接 传的是老状态，则不重新渲染
  return (
      <>
         <p>{counter.number}</p>
         <button onClick={()=>setCounter({number:counter.number+1})}>+</button>
         <button onClick={()=>setCounter(counter)}>setCounter</button>
      </>
  )
}
export default Counter5;
