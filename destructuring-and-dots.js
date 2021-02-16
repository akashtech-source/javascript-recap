// Array destructuring

const numbers = [45, 14, 92, 100];
// const x = numbers[0];
// const y = numbers[1];
const [x, y] = numbers;

// console.log(x, y);

function boxify(num1){

    return [num1, num1 + 5];
}

const [box1, box2] = boxify(8);
console.log(box1, box2);

// Object Destructuring
const {name, age, money} = {id: 2, money: 34000, name: 'Rahim', age: 23}

console.log(name, age);
console.log(name, money);

// Object create shortcut
const one = 25;
const two = 35;
const obj = {one: one, two: two};
const obj2 = {one, two};
console.log(obj2);

// creating new array using three dots

// numbers.push(56);
const newNumbers = [...numbers, 56];
console.log(newNumbers);