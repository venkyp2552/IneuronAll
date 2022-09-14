
//<----------------------------- Iterators & generators --------------------------------->

        //<---------------------Symbol Data type------------------------>

//Symbol is the another data type which we will use for unique values 

/*let a=Symbol("venky")
let b=Symbol("venky")

console.log(a==b);//false bcz a will have unique value and b also will have unique value
console.log(typeof a);//symbol data type
*/

//ex1;
// let Age=Symbol("age")// age is nothing but a identifier or description

// let user={
//     name:"venky",
//     qual:"BT",
//     [Age]:25
// }
// console.log(user.name);
// console.log(user[Age]);// we need to fetch the data from object

//Iterators are nothing but having control on the any kind of  data

// let str1=["a","b","c","d"]
// let res=str1[Symbol.iterator]();
// console.log(res.next())//{ value: 'a', done: false }
// console.log(res.next());//{ value: 'b', done: false }
//it will give value and done status , once we reached to the end done status will update into true

// let x="Hello World"
// let r=x[Symbol.iterator]();
// let st=r.next().done

// while(!st.done){
//     console.log(st);
//     st=r.next()
// }


// var c=["a","b","c","d","e","f","g","h","i","j"]
// for(var i=0;i<c.length;i++){
//     console.log(c[i]);
// }


// Iterators:
//for controlling in any operations we will use iterators,by using iterators we will perform some operations whenever we want.

// var c=["a","b","c","d"]//

// let g=c[Symbol.iterator]();
// /*once we declare like this then one cursor will activate immediately it will pick the values from the array, 
// it will send one by one, we will get values from array like a first, 
// until we run g.next() we will not get b,g.next() will give next values from the array.*/
// let first=g.next();//{ value: 'a', done: false } done status will give false until we reach the last value.
// let second=g.next()//{ value: 'b', done: false }
// let third=g.next().value//c
// let third1=g.next().done//false

// console.log(third1);



//ex2:
// let str1="Hello World";
// let itr1=str1[Symbol.iterator]();
// // console.log(itr1.next());//{ value: 'H', done: false }
// let tr2=itr1.next();
// while(!tr2.done){
//     console.log(tr2);
//     tr2=itr1.next();

// } using next( method only we will accept next values from array)



//<------------------------------------Generators---------------------------------------------->
/*
this is the normal way of function working/
function display(){
    console.log("Hello");
    console.log("World");
    console.log("How are");
    console.log("You");
}
display()*/

/*Generators are nothing but functions: for example if we have function name like display(), 
i want to print first hello(first statement) then i want stop the function execution,later whenever i want i can print world(second statement)
then i want stop function then i will start printing how are(3rd statement) for doing this we will use generators
: yield is nothing but stop * is indicates generator function.
*/
// function *display(){
//     console.log("Hello");
//     yield "first Pause"
//     console.log("World");
//     yield "second pause"
//     console.log("How are");
//     yield "Third pause"
//     console.log("You");
// }  using next only we will process the operations

// if we will keep yield after world it will execute upto hello world only: Hello World{ value: 'second pause', done: false }

// let control=display()
// console.log(control.next());//1st statement will execute  Hello { value: 'first Pause', done: false } the function will get pause 
// console.log(control.next());//2nd statement will execute world { value: 'second pause', done: false }
// console.log(control.next());
// console.log(control.next());//finally last statement will execute with the , done status as true bcz there no statements You{ value: undefined, done: true } 













