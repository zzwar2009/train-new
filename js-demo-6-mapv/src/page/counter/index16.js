
import React, { useState, useEffect, useRef,forwardRef } from 'react';
function Child(props,ref){
    return (
      <input type="text" ref={ref}/>
    )
  }
Child = forwardRef(Child);
function Parent(){
    let [number,setNumber] = useState(0); 
    const inputRef = useRef();
    function getFocus(){
      inputRef.current.value = 'focus';
      inputRef.current.focus();
    }
    return (
        <>
          <Child ref={inputRef}/>
          <button onClick={()=>setNumber({number:number+1})}>+</button>
          <button onClick={getFocus}>获得焦点</button>
        </>
    )
}

export default Parent;