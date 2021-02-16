const numbers = [2, 4, 5, 7, 8];
const friends = ['rafiq', 'jabbar', 'barkat'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 200},
    {id: 3, name: 'watch', price: 50},
    {id: 4, name: 'Tab', price: 80}

];

// map
// যখন একটা এরে থাকবে এবং এরের মধ্যে একটা অবজেক্ট থাকবে, এবং অবজেক্টের মধ্যে অনেকগুলো প্রোপার্টি থাকবে, এবং কোনো নির্দিষ্ট প্রোপার্টি কে নিয়ে কিছু করতে চাইলে ম্যাপ ব্যাবহার করতে হবে। রিটার্ন হিসেবে একটা এরে পাচ্ছি। **ম্যাপটা একলাইনের হলে রিটার্নের প্রয়োজন নাই,কিন্তু মাল্টি লাইন করলে রিটার্ন করতে হবে**
// const names = products.map(products => products.name);
// console.log(names);

// forEach
// এটার বেলায় কোনো কিছু রিটার্ন হয়না। অর্থাৎ, শুধুমাত্র কনসোল টাইপ কিছু একটার ক্ষেত্রে এটা ব্যাবহার করা যেতে পারে
products.forEach(product => console.log(product.name)) 

// filter
// কোনো একটা নির্দিষ্ট এলিমেন্টকে শর্তদিয়ে বের করে নিয়ে আসতে চাইলে ফিল্টার ব্যাবহার করা যেতে পারে। এটা রিটার্ন হিসাবে একটা এরে+অবজেক্ট দেবে।
const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find
// কোনো একটা এরে বা অবজেক্ট এর মধ্যে কোনো নির্দিষ্ট এলিমেন্ট কে খুজে বের করতে চাইলে ফাইন্ড ব্যাবহার করতে হবে।
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);

// reduce
// includes
// push
// pop
// length
// indexOf
