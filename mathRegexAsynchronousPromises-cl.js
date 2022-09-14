/* Math methods
Ceil --> it wil give you highest value-Math.ceil(5.2)= it will give= 6 doesnt matter range
floor --> it will give you lowest value-Math.ceil(5.9)= it will give=5 doesnt matter range
round --> it will given =>5 upper values =<4 it will give you lower value
*/
// let a=Math.ceil(5.9)//6

// let a=Math.floor(5.9)//5
// let a=Math.round(5.9)//6
// let a=Math.round(5.5)//6
// let a=Math.round(-2.9)//-3
// let a=Math.round(5.4)//5
// let a=Math.trunc(6.5)//6 it will consider after decimal points as zero only(all decimal points it will consider 0 only)

// let a=Math.max(10,20,30,40,50,60)//60
// let a=Math.min(10,20,30,40,50,60)//10
// let a=Math.sqrt(25)//5
// let a=Math.cbrt(8)//2
// let a=Math.pow(2,2)//4
// let a=Math.pow(3,2)//9
// let a=Math.abs(-5.5)//5.5 (it will convert all values into positive only)
// let a=Math.PI//3.141592653589793
// let a=Math.random()//if we give empty range will consider from 0 to 1
// console.log(a);


//<---------------------------------REGEX-------------------------------------->
/*Mostly used in pattern matching,searching(if we want to search any text we will pass like /is/g)
Syntax : /pattern/flag(g,i,gi)
if the flag is ,gi case senstivity will not apply other wise case senstivity will apply
*/
// let a="IN704";
// let regex=/IN/i

// console.log(regex.test(a));

//ex-1
/*
ANSWER is Yes
let a="AINEURON";
let reg=/[A-Y]INEURON/
if(reg.test(a)){
    console.log("Yes");
}
else{
    console.log("No");
}*/

//ex-2:

// ANSWER is No bcz we are fetching range from A to H, Z is not in the range in a variable
/*let a='ZINEURON';
let reg=/[A-H a-h]INEURON/
if(reg.test(a)){
    console.log("Yes");
}
else{
    console.log("No");
}*/

// ex-3
/*let a="aHello";
let reg=/[A-Z a-z]Hello/
if(reg.test(a)){
    console.log("Yes");
}
else{
    console.log("No");
}*/


// let a='8INEURON';
// let reg=/[0-6]INEURON/
// console.log(reg.test(a)); //false it will through 

// let a="6709345623"  \d we will use for digits indication
// let reg=/[5-9][0-9] or \d {9}///1st bracket indicates range, 2nd bracket indicates all values has to be in range of 0-9 in all 9 digit values
// console.log(reg.test(a));

// let a="9Hello"
// let reg=/[^0-8]Hello/// it means staring value from a must not be  from 0-8, here we have starting value as 9 so that we wil get result as true
// console.log(reg.test(a));



//<-----------------------------Asynchronous------------------------------->
/* 
1.in js hiw the program will execute means: ex- we have 2 functions like f1,f2,f3. 
First run time call stack will execute f1 function, once it will get execute, then f1 function will remove from call stack, 
then f2 function will enter,once it will get execute f2 also get remove, then f3 function will come and repeat the process called Asynchronous process.

2.Call Back functions Executions:
    we have functions like f1,f2,f3.
     f1(){

    }
    f2(f1){

    }
    f3(f2){

    }
    f3()

    working pattern: in call stack 1st f3() function will go but it will not execute because it have dependices from f2, 
    on top of f3 , f2 will come into call stack, f2 also not execute completely bcz this one also have some dependieces from f1,
    so finally f2 and f3 in running postion only, once f1 will execute,then f2 will start executing,then f3 will start executing,
    once f1 will execute that one remove from call stack , then f2 als same, 
    finally once f3 will execute f3 also leave from the stack then stack get empty.

    note: To prevent loading time and execution time we will use asynchronous
*/

/*synchronous code will execute line by line in call stack
console.log('One');
console.log('Two');
console.log('Three');*/

//Asynchronous concepts:
/*
console.log('One');
setTimeout(()=>console.log('Two'),0);
console.log('Three');
 in the above scenario 1st one and three will execute in last Two will execute bcz setTimeout is callback function:
--> Here call stack and callback queue will comes into picture, 
first synchronous operations(one, three) will execute once call stack get empty then only callback stack queue will get execute that y,
 one and three will execute 1st later two is executing. in async working all together ,it will not wait for untill one task executing simaltenoulsy it will running in the backend
*/

/*const func1=()=>{
    console.log("f1 is starting");
    func2()
    console.log("f1 is ending");
}

const func2=()=>{
    console.log("F2 is starting");
}

func1()

Synchronus pattern 
Above code outPut
f1 is starting
F2 is starting
f1 is ending*/

/*Asynchronous Pattern 

const func1=()=>{
    console.log("f1 is starting");
    func2()
    console.log("f1 is ending");
}

const func2=()=>{
    setTimeout(()=>{console.log("f2 is starting");},100)
}

func1()
OutPut of above code

f1 is starting
f1 is ending
f2 is starting*/


//<-----------------------------PROMISES------------------------>
/*Promises are defined like:
(jack & jill ,grand parents hill station:here jack &jill are the executor functions(asynchronous functions) ,parents are the consumer functions)
    Executor function will make promises to consumer functions as a output.
    3 Internal states:
    1.if the promise is made(success)-we called that state as a resolved promise
    2.if the promise is failure-we called that state as a rejected promise
    3.if the consumer function is waiting for the promises -we called that as pending promises
*/

//Create a Promise

//Executor function
/*let promise=new Promise(function(resolve, reject){
    //pretend it takes time for jack and jill to bring water
    setTimeout(function(){
        //Success condition water has been fetched
        resolve("Hurray! Jack and Jill came with Water");
    },2000)
    setTimeout(function(){
        reject(
            new Error("Jack and jill fell down and broken their crown")
        )
    },2000)
})

//consumer function- the one which will receive the promise
const GrandParentsWaitingFn=()=>{
    //then will indicate promise has been fulfilled
    promise.then(function(result){
        console.log(`Parents cooking with ${result}`);
    })
    promise.catch(function(error){
        console.log(`Omg ${error}`);
    })

    another approach is PROMISE CHAINING

    promise.then((result)=>{
        console.log(`Parents ${result}`);
    })
    .catch((error)=>{
        console.log("Parents${error}")
    })
}
//
//Above code 
GrandParentsWaitingFn()*/

//jsv900.app site for better understanding of promise and asynchronous promise functions will have higher priority while executing::: promise will go into the microtask queue
//if we have f1,f2 synchronous,and f3, f4 asynchronous,f5 is a asynchronous + promise : 1st f1, f2 ,f5,f3,f4(bcz promises are higher order priority)




//<----------------------------------Async Await----------------------------------->
//async always return promises.if we use async and await we no need to declare new Promise(function(resolve, reject)) kind of syntax automatically it will create in the backend

/*
basic code for async only

async function f1(){
    return 1
}
f1().then(console.log("Success")) //Success
*/

/*async function f(){
    //executor function 
    console.log('Hello');
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>resolve("done"),2000)
    })
    //consumer function
    let result= await promise;
    console.log(`Successfully the result is ${result}`);
    console.log("Bye");
}
f()*/



//Complex code for async

/*const getTimeClock=()=>{
    return new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
}

const getSynchronousMsg=()=>{
    return "Hello"
}

const getHelloFromAPromise=()=>{
    return Promise.resolve("Hello-Promise")
}

const getHollaWithDelay=()=>{
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve("Holla"),4000)
    })
}

async function caller(){
    const messageHello1=await getHollaWithDelay();
    console.log(getTimeClock(),messageHello1);

    const messageHello=getSynchronousMsg();
    console.log(getTimeClock(),messageHello);

    const messageHelloAPromise=await getHelloFromAPromise();
    console.log(getTimeClock(),messageHelloAPromise);

    
}
caller()
*/























