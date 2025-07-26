** start of script.js **

let num = 7; // You can change this number (e.g., 5, 12, 20)

// 2. Create a function named factorialCalculator that takes a number as an argument
//    and returns the factorial of that number.
function factorialCalculator(number) {
  // Inside the function, declare a result variable and assign it the value of 1.
  let result = 1;

  // Using a loop, loop through all numbers from 1 to the input number (inclusive)
  // and for each number, multiply the result variable by the current number
  // and assign the result to the result variable.
  for (let i = 1; i <= number; i++) {
    result *= i; // Equivalent to result = result * i;
  }

  return result;
}

// 3. Call the factorialCalculator function with num as the argument
//    and assign the result to the variable factorial.
let factorial = factorialCalculator(num);

// 4. Store the final output in the format "Factorial of [num] is [factorial]"
//    and assign it to the variable resultMsg.
let resultMsg = `Factorial of ${num} is ${factorial}`; // Using template literals for easy formatting

// 5. Output the value of resultMsg to the console.
console.log(resultMsg);

** end of script.js **

