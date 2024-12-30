//1.Variables
//var , let, const -> refer to declarations

//2.Arrow function
//with argument without return
arrowFunc = (Department) => {
        console.log(Department);
}
arrowFunc(["AIML","CSE","IT"])

//with argument with return
arrowFunc1 = (Department) => {
        return Department[0]
}
console.log(arrowFunc1(['AIML,CSE,IT',"AIML","CSE","IT"]));                                                                                     
//task
//without argument without return
arrowFunc2 = () => {
    console.log("hello,kec");
}
arrowFunc2()

//Without argument with return
arrowFunc3 = () => {
    return 1+2
}
console.log(arrowFunc3());

//3.Destructuring operator
var marks=[85,98,90]
var [m1,m2]=marks
console.log(m1);

//4.Ternary operator
var a=10;
out=(a%2==0)?"Even":"Odd"
console.log(out);

//5.Spread operator
studentList=["Madhi","uksha","Akshara","Subha"]
newStudents=["Shona","Bhuvana","pugazl"]
combinedStudents1=[...studentList,newStudents]
combinedStudents2=[...studentList,...newStudents]
console.log(combinedStudents1)
console.log(combinedStudents2)

//6.Rest Operator
function restoperator(...arr){
    console.log(arr);
}
restoperator(1,2,3);
//task
//why rest while having spread
//The Spread Operator is used to 'spread' an iterable into its elements, 
//while the Rest Operator 'collects' multiple elements into an array.

//7.Scope
//i)local scope/block scope - let
//ii)global scope - var,const
const pi=3.14
console.log(pi);

var f=1
var b=4
function scope(){
    let f=5; //let is local scope
    console.log(f);
}
scope();
console.log(f);
console.log(b);
                                                                                                          
//8.Hoisting
console.log(d);
var d=3; //undefined . if const is given cannot access d before initialization . if let is given cannot access d before initialization(Reference error)
console.log(d);

