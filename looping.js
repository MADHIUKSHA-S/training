arr=[10,20,30,40,50,"a","KEC",true,80.9]
console.log(arr);
// //for of
for(var a of arr){
    console.log(a);
}
//for in
for(var a in arr)
{
    console.log(a);
    console.log("The element present in",a,"is",arr[a]);
}
//for each
//example 1
array=[10,20 ]
array.forEach((arr,i) => {  //the first one will be element always and 2nd one is index
    console.log(arr,i);
});
//Example 2 with key value 
obj={
    "firstName":"Madhi",
     "lastname":"uksha",
     "age":20
 }
 obj.forEach(({key,value})=>
{
     console.log(key,value);
}); 
//print object in for of or for each