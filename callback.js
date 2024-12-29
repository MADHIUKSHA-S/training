function databaseSharing(){
    console.log("Data stored successfully")
}
function submitform(formmsg,dbs){
   setTimeout(()=>{
    dbs()
    console.log(formmsg)
},1000)
}
submitform("Form Submitted Successfully",databaseSharing)                                                                                                                                                                                                                                                                                                                                   
//task
function clg(some) {
    console.log(some);
}
function good() {
    clg("good");
}
  
function morning() {
    clg("morning");
}
  
good();
morning();