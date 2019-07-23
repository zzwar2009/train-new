import React, { useState, useEffect, useRef,forwardRef,useImperativeHandle} from 'react';
function Child(props,ref){
    const inputRef = useRef();
    useImperativeHandle(ref,()=>(
      {
        focus(){
          inputRef.current.focus();
        }
      }
    ));
    return (
      <input type="text" ref={inputRef}/>
    )
  }
  Child = forwardRef(Child);
  function Parent(){
    let [number,setNumber] = useState(0); 
    const inputRef = useRef();
    function getFocus(){
      console.log(inputRef.current);
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