# Web Development Training Diary - TR-102

## Date: June 25, 2024

### Covered Topic: Revisions of Full JavaScript Program

#### Overview

Today's training session focused on revising the full JavaScript program. We discussed the following key points:

1. **Data Types and Variables:**
   - Reviewed the different data types (e.g., strings, numbers, booleans).
   - Discussed variable declaration using `let`, `const`, and `var`.

2. **Control Flow:**
   - Revised `if`, `else if`, and `else` statements.
   - Explored `switch` statements for handling multiple conditions.

3. **Functions:**
   - Revisited function syntax and parameter usage.
   - Covered arrow functions and their benefits.

4. **Loops:**
   - Reviewed `for` loops and `while` loops.
   - Discussed common use cases for each type of loop.

#### Example Code

Here's a simple example of a JavaScript function that calculates the factorial of a given number:

```javascript
// Calculate factorial of a positive integer
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
