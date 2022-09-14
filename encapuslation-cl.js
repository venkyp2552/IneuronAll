//Recap of oops.js
/*class Person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(this.name);
    }
}
class Student extends Person{
    constructor(name){
        super(name)
        console.log("Child class is added");
    }
}
let obj=new Student("Venky");
obj.greet()
*/

//Method Over riding 
//below approach is calling like attribute overriding(this.desi) 
//in Person class we have desi is java Developer but in child class student we over ride the desi attribute value

/*class Person{
    constructor(name){
        this.name=name;
        this.desi="Java Developer";
    }
    greet(){
        console.log(`Hello:${this.name}`);
        console.log(`ur like :${this.desi}`);
    }
}

class Student extends Person{
    constructor(name){
        super(name)
        this.desi="Block Chain Developer"
    }
    greet(){
        console.log(`Hello Student:${this.name}`);
        console.log(`ur a :${this.desi}`);
    }
}

let obj1=new Person("Naveen Reddy");
obj1.greet()
let obj2= new Student("Venky")
obj2.greet()*/

//Another way of creating Objects is using function
//functional inheritence:
//function A- object1 in parameter
//function B- working with object1 or working with properties of function A

/*function Animal(val){
    let AnimalObj={};//creating an  empty object
    AnimalObj.name=val.name//assign new attribute to the AnimalObj as name(in backed it will like let AnimalObj={name:"venky"})
    return AnimalObj//return the entire object
}
// let x=Animal({name:"Venky"})
// console.log(x);
function Dog(val){
    let DogObj=Animal(val)
    DogObj.name=val.name
    DogObj.greet=function(){
        return `Hello :${DogObj.name}`
    }
    return DogObj
}

let myCuteDog=new Dog({name:"GermanShepard"})
console.log(myCuteDog.greet())*/


//STATIC METHOD: 
// class Person{
//     constructor(name){
//         this.name=name
//     }
//     greet(){
//         return this.name
//     }
//     //static method mostly not use, will use if we cant change thier values dynamically then will implement
//     static Create(gender){
//         let name=gender=='male' ? 'Raju' : 'Rani';
//         return new Person(name)
//     }
// }

// let name_gender=Person.Create('female')
// console.log(name_gender);


// function work(val){
//     let x={};
//     x.name=val.name
//     return x
// }
// function don(val){
//     let z=work(val);
//     z.name=val.name
//     z.fx=function(){
//         return `i have done ${z.name}`
//     }
//     return z
// }

// let obj=new don({name:"Venky"})
// console.log(obj.fx());


//ENCAPSULATION
//--> define:By the combination of variables and setter(setting functions) and getters(getting functions) will achieve encapsulation
/*class enCap{
    constructor(){
        let age, name
    }
    //setters
    setAge(age){
        this.age=age
    }
    setName(name) {
        this.name=name
    }

    //getters
    getAge(){
        return this.age
    }
    getName(){
        return this.name
    }
}

let rs=new enCap();
rs.setAge(25);
rs.setName("Venky");

console.log(rs.getAge());
console.log(rs.getName());*/


//Hoisting Concept:

// var a=10;
// function display(){
//     console.log("Telusuko and Me working together");
// }

// console.log(a)
// display()

//Here u will get good way of results 

//Below approach

console.log(a)
display()

//OP: undefined and Telusuko and Me working together it will get print

/* the reason why?
    in global execution context(it will go here 1st)
    because every js program before executing it will go into Run time stack, there in base level 2things will takes places
    1.variables declaration
    2.memory allocation
    1.--> initiallly a= undefined   
          display() function assigned

    2.-->Here code will get running

*/

var a=10;
function display(){
    console.log("Telusuko and Me working together");
}



