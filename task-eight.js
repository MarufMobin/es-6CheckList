// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const products = {
    productName : 'iphone 6s',
    productQuentity: 80,
    productSl: 5,
    productAmount: 550,
    productDestiny: 'Dhaka'
}

// const productPrice = products.productAmount;
// const {productAmount} = products;
 
// console.log(productAmount)
// console.log(productPrice)
let result = [];
for( let i = 0; i < products.length; i++){
    if( products.price == 550 ){
        result.push(products)
    }
    console.log(i)
}

// console.log(result)