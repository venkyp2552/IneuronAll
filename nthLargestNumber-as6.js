let ary=[1,29,13,5,8]
let srt=ary.sort((a,b)=> a-b)
function arrayFn(x){
    for(let i=0;i<x.length;i++){
        console.log(x[i])
    }
}
arrayFn(srt)