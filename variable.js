// variable: let, const
let money = 10;
money = 12;
const name = 'Farhan';

let isConfident = false;

const person = {
    name:'Farhan',
    age: 51,
    city: 'Dhaka'
}
const statement = `this person ${name} with age ${person.age}`

// Conditional Statement
if(money < 20){
    console.log("jinn");
}
else{
    console.log("hobe na");
}

// array

const numbers = [34, 23, 16];
const friends = ['hablu', 'kablu', 'gablu', 'jablu'];
const products = [{name: "laptop", price: 400}, {name: "mobile", price: 200}, {name: "Watch", price: 50}]
console.log(products.price);

// loop: for loop While loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}

// function: regular and arrow

// regular

function add (num1, num2){
    return num1 + num2;
}
const pakhi =  add(10, 15);
console.log(pakhi);

// arrow

const double = num =>
 num * 5;
const result = double(8);
console.log(result);
const add2 = (num1, num2) => num1 + num2;

// advance arrow
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}
const results = doMath(16, 14);
console.log(results);