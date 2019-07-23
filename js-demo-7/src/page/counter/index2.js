import React,{useState} from 'react';


function Counter(){
  const [number,setNumber] = useState(0);


  //闭包
  function alertNumber(){
    setTimeout(function(){
        alert(number)
    },2000)
  }
  return (
      <>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
          <button onClick={alertNumber}>alertnumber</button>
      </>
  )
}

export default Counter;
