import { greet, addNumbers, user } from './module_task_14.js';

const multiply = (x, y) => x * y;
console.log(`Arrow Function: multiply(4, 5) = ${multiply(4, 5)}`);

const city = 'New York';
const message = `Welcome to ${city}, enjoy your stay!`;
console.log(`Template Literal: ${message}`);

function welcome(name = 'Visitor') {
  return `Welcome, ${name}!`;
}
console.log(`Default Parameter: ${welcome()}`);

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log('Spread Operator:', moreNumbers);

function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log('Rest Operator (sumAll):', sumAll(1, 2, 3, 4));

const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;
console.log('Array Destructuring:', primary, secondary);

const { firstName, age } = user;
console.log('Object Destructuring:', firstName, age);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const person1 = new Person('David', 35);
console.log('ES6 Class:', person1.introduce());

const fruitsMap = new Map();
fruitsMap.set('apple', 2);
fruitsMap.set('banana', 5);
console.log('Map:', fruitsMap.get('apple'), fruitsMap.has('banana'));

const uniqueNumbers = new Set([1, 2, 3, 3, 2, 1]);
uniqueNumbers.add(4);
console.log('Set:', [...uniqueNumbers]);

console.log('Imported Function (greet):', greet('John'));
console.log('Imported Function (addNumbers):', addNumbers(10, 15));
