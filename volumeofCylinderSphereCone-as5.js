class Cylinder{
    constructor(height,radius){
        this.height = height;
        this.radius = radius;
    }
    getVolumeCylinder(){
        console.log("Volume of Cylinder is :"+(this.height*Math.PI*this.radius*this.radius).toFixed(2))
    }
    getSphereVolume(){
        console.log("Volume of Sphere is :"+((4)/(3*Math.PI*this.radius**this.radius*this.radius)).toFixed(2));
    }
    getConeVolume(){
        console.log("Volume of Cone is :"+((this.height*Math.PI*this.radius*this.radius)/(3)).toFixed(2))
    }
}
let result=new Cylinder(7,2)
result.getVolumeCylinder()
result.getSphereVolume()
result.getConeVolume()