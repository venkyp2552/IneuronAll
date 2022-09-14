class Car{
    constructor(name,brand,com,total_sales){
        this.name = name;
        this.brand=brand;
        this.com = com;
        this.total_sales = total_sales;
    }
    hel(){
        console.log(`my brand is like ${this.brand}`);
    }
}

let carDetails=new Car("Aud21","AUDI","white","2000")
carDetails.hel()

// class NewCar extends Car{
//     constructor(name,brand,com,total_sales,enginee,transmission,suspenssion,seating,capacity,price,yol){
//         super(name,brand,com,total_sales)
       
//         this.enginee = enginee;
//         this.transmission = transmission;
//         this.suspenssion = suspenssion;
//         this.seating = seating;
//         this.capacity= capacity;
//         this.price = price;
//         this.yol = yol;
//     }
//     NewCarFn(){
//         console.log(`my ${this.name} car has branded by ${this.brand}`);
//         //console.log(this.name) this approach is not working
//     }
// }

// let desingCar=new NewCar("BMW","BMW@")
// desingCar.NewCarFn() 
// desingCar.hel() 