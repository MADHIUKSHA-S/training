
import {useState,useRef,useEffect} from "react";
var UseRef = ()=>{
    var [text,setText]=useState("");
    var prevText = useRef("");
    useEffect(()=>{
        prevText.current = text
    },[text])
    return(
        <section>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h2>The current render is {text}</h2>
            <h2>the previous render is {prevText.current}</h2>
        </section>
    )
}
export default UseRef;
