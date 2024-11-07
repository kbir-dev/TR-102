// 1. Palindrome Checker
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

// 2. FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// 3. Factorial Calculation
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120

// 4. Sum of Even Fibonacci Numbers
function sumEvenFibonacci(limit) {
    let a = 1;
    let b = 2;
    let sum = 0;

    while (b <= limit) {
        if (b % 2 === 0) {
            sum += b;
        }
        const next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

console.log(sumEvenFibonacci(4000000)); // 4613732

// 5. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // olleh
      
