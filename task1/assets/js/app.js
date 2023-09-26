// Task1
let widthOfRectangle = parseInt(prompt("Enter width of rectangle."));
let lengthOfRectangle = parseInt(prompt("Enter length of rectangle."));
let areaOfRectangle = widthOfRectangle*lengthOfRectangle;
alert(`Area of rectangle = ${areaOfRectangle}`);

// Task2
let currentYear = 2023;
let birthYear = Number(prompt("Enter your birth year"));
let age = currentYear - birthYear;
alert(`Your age is ${age}`);

// Task3
let km = Number(prompt("Enter km"));
const One_Mile = 0.6214;
let calculateMile = km*One_Mile;
alert(`${km} km = ${calculateMile.toFixed(2)} mile`);