// Normal Function

function addition (number1, number2){
    return number1 + number2;

}
const result = addition(35, 15);
console.log(result);

// Arrow function simple

const adder = (nums1, nums2) => nums1 + nums2;
const total = adder(30, 20);
console.log(total);

//  Arrow function inter

const multi = num => num * 5;
const amount = multi(6);
console.log(amount);

// Arrow function advance

const papaya = (x, y) => {
    const value = x + y;
    const main = value * 2;

    return main;
}
const mainRes = papaya(10, 10);
console.log(mainRes);
