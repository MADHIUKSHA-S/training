async function funName2(){
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    console.log("Hello");
}

arrowfunName = async()=>{
    setTimeout(()=>{
        console.log("kec");
    },5000)
    console.log("kec");
}
    
funName2();
arrowfunName();



async function funName(){
    return "Hello"
}

asyncfunName = async()=>{
    return "Kec"
}

console.log(funName());
console.log(asyncfunName());

async function funName1(){
    console.log("Welocome");
}
asyncfunName1 = async()=>{
    console.log("All");
}

funName1()
asyncfunName1()

