//arrays
//instead ofGIVING NORMAL FUNCTION WE CAN USE ARROW FUNCTION ALSO
// let valu=[5,"Venky",{Comp:"telusko"},function (){console.log("Hello World!");}];
// console.log(valu);
// valu[3]() 
// let run=valu[3] same output will come if we run below command also
// run()

/*in arrays will work for of and for in loops
    1.for in -->this one is used for index values (based on index values it will print the result)
    2.for of --> this one is used for num values(based on num values it will work)
*/


/*let num=[]

num[0]=9;
num[99]=7;
// console.log(num) //OP:[ 9, <98 empty items>, 7 ] 

//for in; based on index numbers bcz we have 0,99 indexes only we have so it will print indexed values only
for(let i in num){
    console.log(i);
}

//doubt
for(let i in num){
    console.log(num[i]);
}


// for of: it will print all values from 0, to 99: 1st it will print 9 bcz we have value and upto 98 values it will print undefined only 99 value it will print 7
for (let i of num){
    console.log(i);
}*/


//SPLICE method: it will remove selected index and it will add new items as well as 

/*let values=[9,5,3,4,7]

values.splice(0,2,99,98) // [ 99, 98, 3, 4, 7 ]
values.splice(0,3,10)   //[ 10, 4, 7 ]
values.splice(1,2,108) //[ 9, 108, 4, 7 ]
console.log(values);*/

//FILTER,MAP,REDUCE, FOREACH

/*for of and for in are external functions are working in existed array: 
ex- we have array like values for of and for in it will ask values from out side to print the values.

Foreach: it will through the value from itself to outside.
for in and of: it will ask value from an array as outside person(internal loop)

*/

//Foreach
// let values=[9,5,3,4,7]
// values.forEach((a)=>// it we have 1 line code no need to write {} brackets
//     console.log(a)
// )

/*OP 9
5
3
4
7*/

/*
Filter:
Here first filter method will check the conditions , if that condition it true then it will move to next step like foreach function to execute true values
Syntax: return is mandatory for filters
values.filter(function(num){
    return true
}).forEach((a)=>console.log(a)) it will not return anything
*/

//Logic Filter the values perform some operations then print the values


//Example:
// let values=[9,6,3,4,7]
// values
// .filter((num)=>{
//     return num%2===0;
// })
// .map((num)=>{
//     return num*2
// })
// .forEach((a)=>console.log(a))

//lets reduce method;
//it will take in a function 2 parameters one is cummulative and real value we have 8,6,4,2 even number, double the value, 16,12,8,4
//16+12=28-cum value is 28 is cummulative value, real value is 8 will come , now 28+8 is 36 now 36 is a cummulative values, num will come as 4 again 36+4 op is 40
// let values=[8,6,3,4,2]
// var result=values.filter((num)=> num%2===0)
//                 .map((num)=>num*2)
//                 .reduce((sum,num)=>sum+num,0)

// console.log(result);


//array structuring

// let value=[9,5,3,4,7]

// let [a,b,c,...d]=value //array destructuring // rest parameters
// console.log(a,b,c); //9 5 3
// console.log(d); //[ 4, 7 ]

//we can also do string destructuring

// let string1="Hello hi namsthe vannakam";

// let [x,y,...z]=string1.split(" ");

// console.log(x,y,z); // OP Hello hi [ 'namsthe', 'vannakam' ]


//Rest and Spread Operator

//Rest Operator
// function sum(a,b,...nums){
//     let result=a+b
//     for(let i of nums){
//         result=result+i
//     }
//     return result
// }

// let last=sum(2,3,5,6,7,8)
// console.log(last);

//Spread Operator

// function sum(a,b,c,d,e){
//     let result=a+b+c+d+e
   
//     return result;
// }

// let num=[2,3,5,6,7,8];

// let last=sum(...num)
// console.log(last);

//Array forEach 
let values=[9,5,3,4,7]
//here will get indexing and values from forEach function
// values.forEach((value,index)=>console.log(value,index));
