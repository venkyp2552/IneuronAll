//Array
// let values=new Array();
// console.log(typeof(values));

//Set
// let set=new Set();
// set.add(34)
// set.add(32)
// set.add("Venky")
// set.add(32)//Set will not allow duplicate values.



//lets add random numbers into set 

// for(let i=1;i<=100;i++){
//    let ins=(Math.ceil(Math.random()*100));
//    set.add(ins)
// }
// console.log(set);

// set.forEach((b)=>console.log(b))

// set.delete("Venky") we can remove the values
// console.log(set);
// console.log(set.size);

/*Map : Key and Value Pair;
    here repated values not allowed to be
*/

// let map=new Map();
// map.set("Venky","Full stack");
// map.set("akash","Product");
// map.set("Gopi","Testing")
// map.set("Venky","Block Chain") //here OP will get venky, block chain bcz it will over ride old values

// console.log(map);
// console.log(map.keys());
// console.log(map.values());

//foreach will take 2 parameters  value and key in MAP data structure
// map.forEach((v,k)=>console.log(k,v))


/*FUNCTIONAL PROGRAMMING
    1.Callbacks
    2.high-order functions
    3.closure
*/
//1.Call Back Function
// console.log("Hi");
// setTimeout(()=>console.log("Hello world"),2000)// call back function will execute after 2 seconds 

// function x(){
//     function y(){
//         console.log("In Y");
//     }
//     console.log("In x");
//     y()//when ever we call the function here then only output will come
// }
// x()

//HIGHER ORDER FUNCTIONS, all function are 1st class citizen functions
//Here add is the higher order function
// function add(x,y,handle,anotherFn){
//     let result=x+y
//     handle(result)
//     anotherFn(result)
// }
//handle is just name we can give any name here to work with print() function
// function print(result){
//     console.log("Printing function is working",result);
// }

// function display(result){
//     console.log("Display function is working",result);
// }

// add(4,5,print,display)


//CLOSURE : 
// function outer(){
//     let num1=20
//     console.log("outer function executing..",num1);

// //Here num1 is the outer of the inner function although we can access the variables which is called closures
//     return function (num3) {
//         let num2=10
//         console.log("Inner Function is executing",num2,num1,num3);
//     }
// }

//Backend result function looks below
// function result(num3=7){
//     let num2=10
//         console.log("Inner Function is executing",num2,num1,num3);
// }

// let outer1=outer;
// console.log(outer1);// here will get only outer output outer function executing..,20 bcz no one is there to access the result function

// let results=outer() //calling outer fn and assigning that into resultss
// results(7)//num3 also we can pass from here it self

//ex2 for closure
// let num=1
// function ed(){
//     console.log(num);
// }
// ed()




//------------------------------------------------------String Methods------------------------------------

var str="Welcome to everyone in this world to enjoy"

// var a=str.length;//33
// var a=str.toLowerCase();//it will convert everything into lowercase
// var a=str.toUpperCase();//it will convert everything into upper case
// var a=str.includes("is")// true, note: it is case sensitive if u search Is it will give u false
// var a=str.includes("Wel")// true
// var a=str.endsWith("rld")// true, note: it is case sensitive if u write Rld it will through false
// var a=str.startsWith("Welcome")// true,note: it is case sensitive

// var a=str.search("to")// it will first index value 8
// var a=str.search("hlo")//if u search unknown word which is not present in the string it will give -1
// var a=str.match(/to/g)// input: regex and string: it will give how many times it will locate in the array that result it will give in the array format,, g is nothing but global it will search entire it will search to is there or not [ 'to', 'to' ]


// var a=String.fromCharCode(65)//A
// var b=String.fromCharCode(75)//K
// var b=str.charCodeAt(6)//101 in str 6 index value ascci number is 101

// var str1=" Hello"
// var str2=" How are you"
// var b=str.concat(str1,str2)

// var b="   Javascript  "
// console.log(b.trim());

// var b=str.slice(2,10)//lcome to
// var b=str.substring(2,10)//lcome to (which index u want, which u don't want)
// var b=str.substr(2,10)// here it will from 2 index how many characters u want like 10 OP--lcome to e
// var b=str.split(" ")//wherever space is there we need to separate that and add  in array

// var b=10;
// console.log(b+20);//it will give 
// var rs=b.toString()// it will convert as a string
// console.log(rs+33);//1033 it will take as string

// var str1='javascript is good is lang'
// var b=str1.replace("javascript","Python");//Python is good is lang it will replace javascript into python
// var c=str1.replace(/is/g,"to")//javascript to good to lang globally we can check this  one
// console.log(c);











