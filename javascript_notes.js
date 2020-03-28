// Java is strictly typed
// javascript is dynamically typed 

// variable declaration
let x;

// three types of variable declaration 
const constantVariable;
// const: immutable, cannot be changed once set, need to
// be declared and assigned at the same time  
let mutableVariable;
// let: mutable, can be changed 

// const and let created in 2015, var used to be
// only way of declaring variables 

var oldDeclaration;

// variable assignment
x = 0; 

// variable types 

// type undefined and null
let undef; // when variable declared but not assigned
let itsNull = null; // not holding any value, empty 

// Boolean
let isGroup = false; // true or false, yes or no, binary 0 or 1

// number type 
let number = 10; // can be used for mathematical equations 

// string type
let string = "string"; // can use double " or single '

// array type: list of values 
let emptyarr = [];

let puppies = ["Joe", "Justin", "Alex"]
let ages = [33, 31, 32, 43]

// arrays can contain other types, not limited to 1 type (like Java)
// examples of mixed types

let arr = [33, 31, 32,"Joe", "Diana", [12, "20"], {"key1": "val1"}, 40]

// example
let people = ["me","myself","I"];
console.log(colors[0]); // will print "me"

// console.log() similar to "sout" in Java 

// adding items to an array 
people.push("you") // pushes to end of array
console.log(people) // would print ["me","myself","I","you"]