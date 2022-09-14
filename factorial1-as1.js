//Take the input from user
const num=145

if(num<0){
    console.log('Number should Positive value');
}
else if(num===0){
    console.log(`The factorial of ${num} is 1.`);
}
else{
    let fact=1;
    for(var i=1;i<=num; i++){
        fact*=i
    }
    console.log(`The factorial of ${num} is ${fact}`);
}