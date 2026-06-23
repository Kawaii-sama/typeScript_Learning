// print
console.log ("hi");
// function
function greet() { console.log ("goodmorning"); }
greet();

// functiom expression
const greet2 = function () {
  console.log ("hello");
}
greet2();

// arrow function
const greet3 = () => { console.log("hi"); }
greet3();

const greet = (name) => { console.log(`My name is ${name}`); }
greet("Pratibha");


const greet = (name , age) => { console.log(`My name is ${name} , my age is ${age}`); }
greet("Pratibha" , 23);


const greet = (name , age) => { console.log(`My name is ${name} , my age is ${age}`); console.log ("Life is pretty");}
greet("Pratibha" , 23);

//single command works without curly braces
const greet = (name , age) => console.log(`My name is ${name} , my age is ${age}`);
greet("Pratibha" , 23);

//setTimeou is a function for a callback function and specified time
setTimeout (greet, 1000);

function greet() {
    console.log ("Hi");
}