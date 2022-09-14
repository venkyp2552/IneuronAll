let x=[]
function prime(a=2,b){
    // x=[]
    for(let i=a;i<=b;i++){
        if((i%2!==0)&&(i%i===0)){
           x.push(i)
        }
    }
    // console.log(x);
    function arrayFactorialFn(x){
        return (x===0)?1:x*arrayFactorialFn(x-1)
    }
    console.log(x.map(arrayFactorialFn));
    
}

prime(1,100)


// var a = [1, 2, 3, 4, 5];

// function fact(x) {
//    return (x == 0) ? 1 : x * fact(x-1);
// }

// console.log(a.map(fact));
