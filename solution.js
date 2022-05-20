/* Exercise 01
 * Create an array with 10 random numbers
 * find the sum of all the numbers in that array
 * print to the console the first and the third items of the array */
console.log("-----------01-------------------");
let array = [];
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
array.push(Math.ceil(Math.random() * 20 + 1));
console.log(array);
let total = 0;
total += array[0];
total += array[1];
total += array[2];
total += array[3];
total += array[4];
total += array[5];
total += array[6];
total += array[7];
total += array[8];
total += array[9];

console.log(`Total is: `, total);
console.log(
  `The first nUmber is: ${array[0]} and the third number is: ${array[2]}`
);

/*  * Exercise 02
 * Write a JavaScript program to find and print the area of a triangle.
 * the formula is base * height / 2 */
console.log("-----------02-------------------");
let baseTri = 20;
let heightTri = 15;
let areaTri = (baseTri * heightTri) / 2;
console.log(`The area of Triangle is: ${areaTri} sq.m`);
/**
 * Exercise 03
 * Write a program that converts temperature from Celsius to Fahrenheit.
 * Formula: multiply by 1.8 and add 32
 */
console.log("-----------03-------------------");
let tempCelsius = 37;
const tempFahrenheit = Math.ceil(tempCelsius * 1.8 + 32);
console.log(
  `The ${tempCelsius} degree Celsius in Fahrenheit is: ${tempFahrenheit} `
);

/**
 * Exercise 04
 * Write a program that works like a dice and returns a random number between 1 and 6
 */
console.log("-----------04-------------------");
let randNum = Math.ceil(Math.random() * 6);
console.log(`The random number between 1 and 6 is: ${randNum}`);

/**
 * Exercise 05
 * Write a program that rounds a number to the nearest hundred.
 * Example: round of 1749 should return 1700 and round 856.12 should return 900
 */
console.log("-----------05-------------------");
let num = 255.1;
let roundToHundred = Math.round(num / 100) * 100;
console.log(`The number (${num}) to nearest hundred is: ${roundToHundred}`);

/**
 * Exercise 06
 * Create an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a program that sums all the numbers of the array
 */

console.log("-----------06-------------------");
let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
sum += myLuckyNumbers[0];
sum += myLuckyNumbers[1];
sum += myLuckyNumbers[2];
sum += myLuckyNumbers[3];
sum += myLuckyNumbers[4];
sum += myLuckyNumbers[5];
sum += myLuckyNumbers[6];
sum += myLuckyNumbers[7];
sum += myLuckyNumbers[8];
sum += myLuckyNumbers[9];

console.log(`The sum of my array is: ${sum}`);

/**
 * Exercise 07
 * Write a program to compute the difference between a specified number and 19.
 * The program should print triple their absolute difference if the specified number is greater than 19, else prints their difference
 */

console.log("-----------07-------------------");
let num1 = 19;
let specNum = 20;
let diffNum = Math.abs(specNum - num1);
if (specNum >= num1) {
  console.log(`Triple the difference is: ${diffNum * 3}`);
} else {
  console.log(`The difference is: ${diffNum}`);
}

/**
 * Exercise 08
 * Write a program that checks if a number is odd or even * and display a message to the screen
 */
console.log("-----------08-------------------");

let number = 153;

if (number % 2 === 0) {
  console.log(`The number ${number} is EVEN`);
} else {
  console.log(`The number ${number} is ODD`);
}

/**
 * Exercise 09
 * What would following code return?
 * console.log(typeof typeof 1);
 * Explain your answer
 */
console.log("-----------09-------------------");

console.log(typeof typeof 1);
console.log(
  "Explanation: typeof 1 ia a number. But now the number itself is a string. so the typeof typeof 1 is a string"
);

/**
 * Exercise 10
 * Create a program that handles a string in the following way: If its length is greater thatn 19 characters, then it should keep the first 19 characters and replace the remaining part with this: "..."
 *
 * Examples:
 * "A-tisket a-tasket A green and yellow basket"
 * should print the string "A-tisket a-tasket A..."
 * "Peter Piper picked a peck of pickled peppers"
 * should print the string Peter Piper...
 * "A-something" should print "A-something"
 */
console.log("-----------10-------------------");

let myString1 = "A-tisket a-tasket A green and yellow basket";
let myString2 = "Peter Piper picked a peck of pickled peppers";
let myString3 = "A-something";

if (myString1.length > 19) {
  console.log(myString1.substring(0, 19) + "...");
} else {
  console.log(myString1);
}
if (myString2.length > 19) {
  console.log(myString2.substring(0, 19) + "...");
} else {
  console.log(myString2);
}
if (myString3.length > 19) {
  console.log(myString3.substring(0, 19) + "...");
} else {
  console.log(myString3);
}

/**
 * Exercise 11
 * Create a program that checks if a given character is uppercase and prints "given character is UPPERCASE" or prints "given character is LOWERCASE" if it's not
 */

console.log("-----------11-------------------");

let char = "AA";

if (char === char.toLocaleUpperCase()) {
  console.log(`The char (${char}) is UPPERCASE`);
} else {
  console.log(`The char (${char}) is NOT UPPERCASE`);
}

/**
 * Exercise 12
 * Write a program to check whether the last digit of two given numbers is the same and print the result
 */

console.log("-----------12-------------------");

let number1 = 223;
let number2 = 253;
if (number1 % 10 === number2 % 10) {
  console.log(
    `The numbers (${number1} and ${number2}) have the same last digit`
  );
} else {
  console.log(
    `The numbers (${number1} and ${number2}) do not have the same last digit`
  );
}
  
