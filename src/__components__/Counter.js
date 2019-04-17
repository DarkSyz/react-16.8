import React, {useState} from 'react';

export function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You clicked <label data-testid='counter'>{count}</label> times</p>
            <button data-testid='trigger' onClick={()=>setCount(count+1)}>
                Click me!
            </button>
        </>
    );
}
