// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 


function threeParameter( num1,num2,num3 = 7 ){
    return num1 + num2 + num3; 
}

const result = threeParameter( 5,5 );

// console.log(result)

const thirdResult = ( num1, num2, num3 = 7 ) =>{
   return num1 + num2 + num3 ;
}

const output = thirdResult( 1, 2 );
// console.log(output)

const arr = [ 2 , 5,1];
let resultOfSum = 0;
let secondarySum = 7;

// if(  arr.length >= 3 ){
//     for( let i = 0; i < arr.length; i++ ){
//         resultOfSum += arr[i];
//     }  

// }else{
    
//     for( let i = 0; i < arr.length; i++ ){   
//         secondarySum += arr[i];  
//     } 
// }
// console.log(resultOfSum);
console.log(secondarySum);


function totalThreeNumber( num1 , num2 , num3 = 7){
    return num1 + num2 + num3;
}

// console.log(totalThreeNumber( 1, 2 ));