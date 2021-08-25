// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    { productName  : 'I phone', productId  : 1,productQuentity : 50,productPrice : 1200 },
    { productName  : 'Samsung', productId  : 2,productQuentity : 50,productPrice : 5000},
    { productName  : 'Hawai', productId  : 3,productQuentity : 50,productPrice : 1800},
    { productName  : 'Shawmi', productId  : 4,productQuentity : 50,productPrice : 8000},
    { productName  : 'Htc', productId  : 5,productQuentity : 50,productPrice : 500}
];

// const {productName, productPrice, productId, productQuentity} = products;


const findValue = products.find( result => result.productPrice == 500 );

// console.log(findValue)

const result = [];
for( let i = 0; i < products.length; i++ ){
    const amount =  products[i].productPrice;
    if( amount == 500 ){
        result.push(products[i]); 
    }
}
console.log(result)

let i = 0;
const ans = [];
while( i < products.length){
 
    if( products[i].productPrice == 500 ){
        ans.push(products[i])
    }
    i++;
}
    
// console.log(ans)

// const productPrice = products.productPrice;
// const {productPrice} = products;

// const usingFind = products.find( num => num == 500 );
// console.log(usingFind)



// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 


// Array