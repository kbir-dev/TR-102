# TR-102 Web Development Training Daily Diary

**Date:** 21th June 2024

## Daily Summary

Today in the TR-102 web development training, we covered the following topics:

1. **JavaScript forEach Loop**
   - The `forEach` method executes a provided function once for each array element.
   - Useful for iterating over an array when you don't need to create a new array.

2. **JavaScript Map Function**
   - The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - Useful for transforming elements in an array.

3. **JavaScript Reduce Function**
   - The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.
   - Useful for aggregating values in an array to a single value, such as a sum.

## Examples in JavaScript

Below are some examples demonstrating the `forEach` loop, `map` function, and `reduce` function in JavaScript.

```js
// Example array
const numbers = [1, 2, 3, 4, 5];

// forEach Loop
console.log('forEach Loop:');
numbers.forEach(number => {
  console.log(number);
});

// Map Function
const squaredNumbers = numbers.map(number => number * number);
console.log('Map Function:', squaredNumbers);

// Reduce Function
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Reduce Function:', sum);
