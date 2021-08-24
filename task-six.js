// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

 
const filterOdd = [ 28, 447, 14, 47, 45, 74, 474, 2, 1];

const filtered = filterOdd.filter( num => num % 2 == 1 );

// console.log(filtered)


let array = [1,2,3,4,5,6,7,8,9,10,11];
const oddNumberFilter = array.filter( number =>{
    return number % 2;
} )

//  console.log(oddNumberFilter)

// NOTE::-- the predicate can be simplified as,
const oddNumberFilt = array.filter( num => num % 2 );
// console.log(oddNumberFilt)
