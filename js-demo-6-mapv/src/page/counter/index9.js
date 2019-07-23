import React, { useState, useCallback, useEffect } from 'react';

const set = new Set();

export default function  Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');

    const callback = useCallback(() => {
        console.log(count);
    }, [count]);
    set.add(callback);


    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}

