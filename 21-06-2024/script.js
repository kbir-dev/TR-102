// Example array
const numbers = [1, 2, 3, 4, 5];

// forEach Loop
// The forEach method executes a provided function once for each array element.
console.log('forEach Loop:');
numbers.forEach(number => {
  console.log(number);
});

// Map Function
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
const squaredNumbers = numbers.map(number => number * number);
console.log('Map Function:', squaredNumbers);

// Reduce Function
// The reduce method executes a reducer function on each element of the array, resulting in a single output value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Reduce Function:', sum);

// Additional Examples for Clarity

// forEach Loop Example
// Prints each fruit in the array to the console.
const fruits = ['apple', 'banana', 'cherry'];
console.log('forEach Loop with fruits:');
fruits.forEach(fruit => {
  console.log(fruit);
});

// Map Function Example
// Creates a new array with each number doubled.
const doubled = numbers.map(number => number * 2);
console.log('Map Function with doubling:', doubled);

// Reduce Function Example
// Calculates the total sum of numbers in the array.
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Reduce Function with total:', total);
