import { useState , useMemo } from "react";
var slowFunction=(number)=>{
    for (let i=0;i<1000000000;i++)
    return number*2;
    
}

var UseMemo = ()=>{
    var [theme,setTheme]=useState(true);
    var [num,setNum]=useState(0);
    var darkLight ={
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",
    }
    var doublingNumber= useMemo(()=>{
        return slowFunction(num)
    },[num])
    return (
        <section>
            
            <h1>This is UseMemo example</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setTheme(theme = !theme)}>Toggle Theme</button>
            <h2 style={darkLight}>{doublingNumber}</h2>
            
        </section>
    )
}
export default UseMemo;