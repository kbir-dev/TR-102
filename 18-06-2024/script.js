// Working with Arrays
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red

// Nested Arrays
let coordinates = [
  [10, 20],
  [30, 40]
];
console.log(coordinates[1][1]); // Output: 40

// Array of Objects
let users = [
  {username: "alice", email: "alice@example.com"},
  {username: "bob", email: "bob@example.com"}
];
console.log(users[0].username); // Output: alice

// Objects and Nested Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
  }
};
console.log(person.contact.email); // Output: john.doe@example.com

// Object of Arrays
let course = {
  title: "Web Development",
  topics: ["HTML", "CSS", "JavaScript"]
};
console.log(course.topics[2]); // Output: JavaScript

// String Methods
let sentence = "Learning JavaScript is fun!";
console.log(sentence.toUpperCase()); // Output: LEARNING JAVASCRIPT IS FUN!
console.log(sentence.split(" ")); // Output: ["Learning", "JavaScript", "is", "fun!"]
