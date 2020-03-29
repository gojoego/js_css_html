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
// used often in debugging

// adding items to an array 
people.push("you") // pushes to end of array
console.log(people) // would print ["me","myself","I","you"]

// array length can be found using .length (also works on string values)
console.log(colors.length) // will print 4 

// JSON: javascript object notation (stores information)
// js objects (can also hold functions) 

// object type
// properties inside always have key:value
let obj = {}

// example

let objectData = {
    firstKey: 10,
    second: 1,
    third: "another String",
    fourthProperty: [1,2],
    // can have other objects
    anotherObject: {
        second: 2,
    },
    // can contain methods
    consoleSomething: function(){
        let messsage = "Hello Nomads!"
        console.log(message)
    }
}

// accessing object properties and methods
console.log(objectData.firstKey) // will print 10

objectData.consoleSomething()
// will run/invoke consoleSomething method
// will print "Hello, Nomads!"

// What is the type?
let number2 = "10"; // String
console.log(typeof(number2)) // typeof checks type of variable 

// a variable in JS can contain any data
// at one moment can be String and a number at another 
let message = "hello";
message = 123456; 

// JS: dynamically typed language, variables not bound
// to any specific data type, can be changed easily but 
// bugs result from not being careful about variable types
let num = 10;
let num2 = 20;
let strNum = "30";

let newnum = num + num2
console.log(newnum) // will print 30

let isItANumber = num2 + strNum
console.log(isItANumber) // will print 2030

console.log(true + "a string") // will print: truea string

/* 

Function Anatomy

function: block of code that describe 
to machine what it should be doing

NOTE: common to use camel case when naming functions

*/ 


// function declaration 
function addUp(x,y){
    return x + y;
}

// function expression
let subtract = function (x,y){
    return x - y;
}
// arrow functions 
// equivalent to a lambda expression in Java 
let multiply = (x,y) => {return x * y}

// function invocation 
multiply(3,4)

// for loops

// example: counting to ten, starting at one

for (let idx = 1; idx <= 10; idx++){
    // loop through all numbers until 10
    // print out the number
    console.log(idx);
}

/*

for writing loops: 

let idx = 1;
idx = idx + 1;
idx += 1
idx++ 
exact same statement written 3 different ways

*/

// for of loop
let names = ["Bao", "Hue", "Junior"];
for(let name of names){
    console.log(name);
}

// for of loop shortened for loop
for (let idx = 1; idx <= names.length; idx++){
    console.log(names[idx])
}

// higher order functions: iterate over arrays and
// perform actions on them 

const double = n => n * 2;

const nums = [1,2,3,4];

let newNums = nums.map(double)
