let sum=0;
let number=120;
let temp=number

while(temp>0){
    let reminder=temp%10;
    sum+=(reminder*reminder*reminder)

    temp=parseInt(temp/10)
}
if(sum==number){
    console.log("Given number is armstrong Number");
}
else{
    console.log("Given number is not armstrong Number");
}