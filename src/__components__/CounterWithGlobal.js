import React, {setGlobal, useGlobal} from 'reactn';

setGlobal({count: 0});

export function Counter(){
    const [count, setCount] = useGlobal('count');
    
    return (
        <>
            <p>You clicked <label data-testid='counter'>{count}</label> times</p>
            <button data-testid='trigger' onClick={()=>setCount(count+1)}>
                Click me!
            </button>
        </>
    );
}
