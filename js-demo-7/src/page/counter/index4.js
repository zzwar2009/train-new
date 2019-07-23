import React,{useState} from 'react';


function Counter(){
  //惰性初始化
  const [{name,number},setValue] = useState(()=>{
    return {name:'计数器',number:0};
  });
  return (
      <>
          <p>{name}:{number}</p>
          <button onClick={()=>setValue({number:number+1,name:'fdsfdsf'})}>+</button>
      </>
  )
}
export default Counter;
