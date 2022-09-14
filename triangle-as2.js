function checkTriangle(x,y,z){
    //Check Equilateral triangle
    if(x==y && y==z && z==x){
        console.log("Equilateral Triangle");
    }
    //check isosceles triangle
    else if(x==y || y==z || z==x){
        console.log("Isosceles Triangle");
    }
    else{
        console.log("Scalene Triangle");
    }
}


checkTriangle(2,3,5)