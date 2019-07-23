import React,{useState} from 'react';


function Counter(){
  const [number,setNumber] = useState(0);


  //闭包的值+1
  function lazy(){
    setTimeout(function(){
        setNumber(number+1)
    },2000)
  }
  function lazyFunc(){
    setTimeout(function(){
      setNumber(number=>number+1);
    },2000)
  }
  return (
      <>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
          <button onClick={lazy}>lazy</button>
          <button onClick={lazyFunc}>lazyFunc</button>
      </>
  )
}

export default Counter;
