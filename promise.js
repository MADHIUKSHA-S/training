function isTimeConsumption(t){
    time=1100
    return time<=t;
}
function isValidLocation(loc){
    location="Ooty"
    return loc == location;
}
function locationFinder(){
    loc ="Ooty"
    time=1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc) && isTimeConsumption(time)){
                locFound("Location Found");
            }
            else{
                locNotFound("Location Not Found");
            }

        },time)
    })
}


locationFinder().then((resolvedMsg)=>{    //If we put this there is no output and there is error
    console.log(resolvedMsg);
}).catch(function (rejectedMsg){
    console.log(rejectedMsg);
})
//console.log(locationFinder());// If we put this there is an error with an output.
