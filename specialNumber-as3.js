let num=1234
let numSplit=String(num).split('')
let ar=[]
for(let i of numSplit){
    ar.push(Number(i))
}
    function arrayFactorialFn(ar){
        return (ar===0)?1:ar*arrayFactorialFn(ar-1)
    }
    let arrayValues=ar.map(arrayFactorialFn);
    
let result=arrayValues.reduce((a,b)=>a+b,0)
if(result===num){
    console.log("Given number is Special Number");
}
else{
    console.log("Given number is not Special Number");
}
