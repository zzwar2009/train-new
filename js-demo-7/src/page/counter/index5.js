import React,{useState} from 'react';


function Counter(){
  const [counter,setCounter] = useState({name:'计数器',number:0});
  console.log('render Counter')
  return (
      <>
          <p>{counter.name}:{counter.number}</p>
          <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
          <button onClick={()=>setCounter(counter)}>-</button>
      </>
  )
  }
export default Counter;
