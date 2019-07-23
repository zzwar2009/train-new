import React,{useState} from 'react';


function Counter2(){
  const [number,setNumber] = useState(0);
  return (
      <>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
      </>
  )
}

// function Counter2(){
//   const [number,setNumber] = useState(0);
//   function alertNumber(){
//     setTimeout(()=>{
//       alert(number);
//     },3000);
//   }
//   return (
//       <>
//           <p>{number}</p>
//           <button onClick={()=>setNumber(number+1)}>+</button>
//           <button onClick={alertNumber}>alertNumber</button>
//       </>
//   )
// }
export default Counter2;
