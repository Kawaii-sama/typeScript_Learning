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