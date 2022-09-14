const year=prompt("Enter the year:")

function gettingYear(year){
    if((year%4==0 && year%100!=0)||(year%400==0)){
        console.log(`${year} is Leap year`);
    }
    else{
        console.log(`${year}is Not a Leap Year`);
    }
}

gettingYear(year)
































class Car{
    constructor(name,brand,com,total_sales){
        this.name = name;
        this.brand=brand;
        this.com = com;
        this.total_sales = total_sales;
    }
}
class Child extends Car{
    constructor(name,brand,com,total_sales,enginee,transmission,suspenssion,seating,capacity,price,yol){
        super(name,brand,com,total_sales)
        this.enginee = enginee;
        this.transmission = transmission;
        this.suspenssion = suspenssion;
        this.seating = seating;
        this.capacity= capacity;
        this.price = price;
        this.yol = yol;
    }
    greeting(){
        console.log(`The Car proprties are below listed ${this.name}`);
    }
}

let vista=new Child("Maruti");
vista.greeting()