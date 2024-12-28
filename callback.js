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
