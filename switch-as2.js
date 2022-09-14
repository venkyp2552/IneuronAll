// let grade=20
// switch (grade){
//     case 
// }

// if(a>=90 && a<100){
//     console.log("100");
// }
// else{
//     console.log("00");
// }
/* switch (grade) {
    case (grade>=90 && grade<100):
        console.log("Student grade is S");
        break;
    case (grade>=80 && grade<90):
        console.log("Student grade is A");
    default:
        console.log('No Grade');
        break;



}*/ 

// const grade="dog";
// switch (grade){
//     case "dog":
//         console.log("Correct");
//         break;
//     default:
//         console.log("No marks");
//         break;
// }



// if((grade>90) && (grade<100)){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }
const grade=50;
switch (true){
    case ((grade>=90) && (grade<100)):
        console.log("Student is S Grade");
        break;
    case ((grade>=80) && (grade<90)):
        console.log("Student is A Grade");
        break;
    case ((grade>=70) && (grade<80)):
        console.log("Student is B Grade");
        break;
    case ((grade>=60) && (grade<70)):
        console.log("Student is C Grade");
        break;
    case ((grade>=50) && (grade<60)):
        console.log("Student is D Grade");
        break;
    case ((grade>=40) && (grade<50)):
        console.log("Student is E Grade");
        break;
    case ((grade>0) && (grade<40)):
        console.log("Student has failed");
        break;
    default:
        console.log("Invalid marks");
        break;
}

