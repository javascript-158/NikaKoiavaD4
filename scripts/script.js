
// A program that displays every third element of any 10-element.
//   for 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let count = 2; count < array.length; count +=3 ){
    console.log(array[count])
}

//   while
let arrayW = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 2;

while(count < arrayW.length) {
console.log(arrayW[count]);
count+=3;
}


// A program that outputs numbers from 1 to 10 backward.
// for

let arrayS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( let count = arrayS.length - 1; count > - 1; count--){
    console.log(arrayS[count]);
}

// while
let arrayWS= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counts = arrayWS.length - 1;

while(counts > -1){
    console.log(arrayWS[counts]);
    counts--
}

// Remove the name 'Bob' wherever it occurs and return an array without the name 'Bob'.
// For and Arry

let nameList = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];

let nameA = [];

for (let nameAr = 0; nameAr < nameList.length; nameAr++) {
  if (nameList[nameAr] !== "Bob") {
    nameA.push(nameList[nameAr]);
  }
}

console.log(nameA);

// Fillter

let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];

let filteredNames = names.filter (letter => {
return letter !== "Bob";
});

console.log(filteredNames)

// calculator the power of a specific number.

function numberPower(number, power){
return number ** power;
}

console.log(numberPower(5, 2));


// Fizz, Buzz, FizzBuzz.

let  fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log( i + output);
  }
}
fizzBuzz();

// factorial Calculator.
// for

let factorialCalculator = (number) => {
  let result = 1;

  for (let factorial = 2; factorial <= number; factorial++) {
    result *= factorial;
  }

  return result;
}

console.log(factorialCalculator(5));

// while

let factorialCalculatorW = (number) => {
  let result = 1;
  let factorial = 2;

  while (factorial <= number) {
    result *= factorial;
    factorial++;
  }

  return result;
};

console.log(factorialCalculatorW(7));

//  capitalizes the first letter of a string.

const word = () => {
  let text = "javascript"
  console.log(capitalized = text.charAt(0).toUpperCase() + text.slice(1));
};

word()

// A function that checks if the string passed to it is empty.

let blankStringChecker = (testString) => {
    if (testString.length === 0) {
  return "this string is blank";
} else {
  return "this string is not blank";
}
}

let testString = "nika"
console.log(blankStringChecker(testString));

// A function that converts a string passed to it into an array.

let stringArray = (testString) => {
  return testString.split(' ');
}

const resultArray = stringArray("Hello World");
console.log(resultArray);


// Email mask  

function emailMask(email) {
  const [username, domain] = email.split("@");
  const maskedUsername = username.slice(0, 4) + "*".repeat(username.length - 2);
  return `${maskedUsername}@${domain}`;
}

const userEmail = "beqa.beqauri@gmail.com";
const maskedEmail = emailMask(userEmail);
console.log(maskedEmail);