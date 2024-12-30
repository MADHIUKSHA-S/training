import { useState } from "react";
const Gallery=()=>{
    var [counter,setCount] =useState(0);
    function increment(){
        setCount(counter+1)
    }
    return (
        <section>
            <h1>the state of my variable counter is {counter}</h1>
            <button onMouseOver={increment}>Increment</button>
            <button onDoubleClick={()=>{setCount(counter -1 )}}>Decrement</button>
            <button onClick={()=>{setCount(counter=0)}}>Reset</button>
        </section>
        
    )
}
export default Gallery;