import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
function Parent() {
    let [number, setNumber] = useState(0);
    return (
        <>
            <Child />
            <button onClick={() => setNumber({ number: number + 1 })}>+</button>
        </>
    )
}
let input;
function Child() {
    const inputRef = useRef();
    console.log('input===inputRef', input === inputRef);
    input = inputRef;
    function getFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}
export default Parent;