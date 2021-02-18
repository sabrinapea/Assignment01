// STEP 1 - convert identifiers to Camel Case notation
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let mylibraryFunction;

// STEP 2 - examples of various expressions
2.9 //numeric literal
"Hello!" // string literal
true // Boolean literal
null // literal null value

// Step 3 - examples of complex/ variable expressions
let anExpression = 3 * (10 / 5) + 3;
let totalPlates = (25 + 3) / 100;

// Ex 4 - Declaring 9 variables
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let may_we_contact_you;

// Ex 5 - declaring and assigning values
let firstName = "Tom";
let zipCode = 12395;
let city = "San Diego";

// Ex 6 - create variable and coerced result
let totalApples = 111;
alert("You got" + totalApples + " apples."); // coerced to a string

// Ex 7 - create two variables
let xoo = false + "that's the truth"; // display - Boolean should be coerced to a string
let moo = 14 + true; // display - Boolean should be coerced to a number

// Ex 8
let someQuote = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I am not sure about the former."';
window.console.log(someQuote); // changed the I'm to I am

// Ex 9
let zoo = null; // displays null
let zoo; // displays undefined

// Ex 10
let z = prompt("what is my favorite number between 1 and 20?");
let z2 = 7;
let z3 = false;
let z4 = null;
let z5;

console.log('Num 1' + typeof z);
console.log('Num 2' + typeof z2);
console.log('Num 3' + typeof z3);
console.log('Num 4' + typeof z4);
console.log('Num 5' + typeof z5);

// Ex 11
alert('Hello' + ' Sabrina Steiner' + ', welcome to the JavaScript class!');

// Ex 12
let name = "Sabrina";
name = 12154;
alert('Hello' + name + ', welcome to the JavaScript class!');

// Ex 13
let name = "Sabrina";
let course = "JavaScript";
alert('Hello ' + name + ', welcome to the ' + course + ' class!');

// Ex 14
let name = "Sabrina";
let course = "JavaScript";
alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

// Ex 15
let name = prompt ("What is your name?");

// Ex 16
let course = prompt ("What class are you taking?");

// Ex 17
let x = 10;
let y = 20;
console.log(x + y);

// Ex 18
let x = 20;
console.log (x + 20); // result is 40

// EX 19
let x = 20;
x = x * 5;
console.log(x); // result is 100

// Ex 20
let x = 20 % 3;
x = x / 1;
console.log(x); // result is 2

// Ex 21
let x = 10;
let y = 10;
console.log(x == y || y == x); // result is true

// Ex 22
let x = 20;
let y = 75;
console.log(x >= y && y <= x); // result is false
