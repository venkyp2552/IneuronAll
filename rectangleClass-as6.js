class RectangleClass{
    constructor(areaValue){
        this.areaValue = areaValue;
    }
    areaCalculationFn(){
        let result=this.areaValue*this.areaValue
        console.log(`The area of given Square is:${result}`);
    }
}

class SquareClass extends RectangleClass{
    constructor(areaValue){
        super(areaValue)
    }
    displayAreaFn(){
        super.areaCalculationFn()
    }

}

let SquareValue=new SquareClass(5);
SquareValue.displayAreaFn();