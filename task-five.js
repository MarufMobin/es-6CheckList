// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 


const numberOfArray = [ 28, 447, 14, 47, 45, 74, 474, 2, 1];

const arr = numberOfArray.map( num => num * 5 );

// console.log(arr)

// Using for loop and find the result of multiple number and find all number 5 multipication

let finalResult = [];
for( let i = 0; i < numberOfArray.length; i++ ){
   finalResult.push( numberOfArray[i] * 5 );
}

// console.log(finalResult)

// Using for of Loop 
let findOutResult = [];

for( const number of numberOfArray ){
    findOutResult.push(number * 5);
}

// console.log(findOutResult)