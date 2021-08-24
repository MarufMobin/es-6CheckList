// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    productName  = 'iphone',
    productId  = 1,
    productQuentity = 50,
    productPrice = 500,
    productWeight = '800 kg',
    productSize = '32 feet'
]

// const productPrice = products.productPrice;
// const {productPrice} = products;

// const usingFind = products.find( num => num == 500 );

let usingFind = [];
for( i = 0; i < products.length; i++ ){
   const find =  products[i];
   if( find == '500' ){
       usingFind.push(find);
       break;
   }
}

// console.log(usingFind)



// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 


// Array