//Class is used to define the object behaviour

class Person{
    //a class have only one constructor
    //You need to define all the attributes of the class with in the body of constructor
    constructor(name,age,qual,city,nationality,salary=100,gender="M"){
        //this key word is refer current object of the class
        this.name=name;
        this.age=age;
        this.qual=qual;
        this.city=city;
        // this.nationality=nationality;
        // this.salary=salary;
        // this.gender=gender;
    }
    greet(){
        console.log(`Hello My ${this.name},i am ${this.age} old, qualification like ${this.qual}, lives in ${this.city}`);
    }
}


let rs=new Person("Venky",25,"Btech","Chennai")
rs.greet()

// //Inheritence concepts
// //will get properties from parent classes without re writing the code
//we need to use super function for accessing the parent class properties
class Student extends Person {
    constructor(name,age, qual,city,love){
        //super points to the constructor of the parent class
        //using super --> the derived class mimics behaviour of parent class
        //here  we can get properties from parent class and ur self u can modifiy that peoprties u can add new properties also
        super(name,age,qual,city,love)
        this.name=name;
        this.age=age;
        this.qual=qual;
        this.city=city;
        this.love=love;
    }
    greet_student(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.qual);
        console.log(this.city);
        console.log(this.love);
    }
}

// let student1=new Student("mitra",20,"Mtch","Banglore","Yes")  
// student1.greet_student()

//ex2

/*Parent class-Person
1 Child class- Student-behave exactly like Person class
1 Child Class- Child -behave exactly like Student class --> exactly like Person Class
child class will have own attributes 
*/

class Child extends Student {

}

let child1=new Child("madhu",20,"Cricked","Banglore")  
child1.greet()

















