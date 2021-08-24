// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const myName = "MD: Maruf";
const ocupation = "full Strack Web Devloper";
const dreame = "Make a IT company"

const descriptionMySelf = ` Hellow,
My name is ${myName} and I am a ${ocupation}.My Dreame is ${dreame} that's Why i learn more and more also admit Web development Online Course And Larn the Lessons .`;

// console.log(descriptionMySelf)



const products = {
    productName: 'potato',
    productQuality: 'Good',
    productStatus: 'Available',
    productId: 1,
    productPrice: 10
}

const {productName,productQuality,productStatus,productId,productPrice} =  products;

const desctiptionOfProduct = `This is The ${productName} chips.It's Quality is Vary ${productQuality}, and it status ${productStatus} now, Also it Price is ${productPrice} and it's ID: ${productId} if Any One can Parches it?`;

console.log(desctiptionOfProduct);