const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"

let fruits_1 = ["apple", "banana", "cherry"];
console.log(fruits[3]);

// Add new fruit
const newLength =fruits.push("orange");
console.log(newLength); // 4

let numbers = [2, 3];
let newLength_1 = numbers.unshift(1);
console.log(numbers);
console.log(newLength_1); // 3

let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"