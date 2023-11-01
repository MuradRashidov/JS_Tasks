//Task1
// let a = prompt("Enter a number");
// let b = Math.sqrt(a);
// console.log(b);
// Task2
// let celsius = Number(prompt("Enter celsius"));
// const Fahrenheit = 1.8*celsius+32;
// console.log(Fahrenheit);

//Task3
// let number = Number(prompt("Enter a number"));
//  if(number>0){
//     console.log("Number is positive")
//  }
//  else if(number<0){
//     console.log("Number  is negative");
//  }
//  else{
//     console.log("Number is 0");
//  }

//Task4
//Number(prompt("Enter a number"))%2===0?console.log("Number is even"):console.log("Number is odd");
// let a = Number(prompt("Enter a number"));
// let b = Number(prompt("Enter a number"));
// let c = Number(prompt("Enter a number"));
// if(a>b && a>c){
//    console.log("Greatest number is first");
// }
// else if(b>a && b>c ){
//     console.log("Greatest number is second");
// }
// else{
//     console.log("Greatest number is third");
// }
//console.log(Math.max(a,b,c));

// let firstNumber = Number(prompt("Enter first a number"));
// let operator = prompt("Enter an operator");
// let secondNumber = Number(prompt("Enter second a number"));
// switch (operator) {
//     case "+":
//         console.log(firstNumber+secondNumber);
//         break
//     case "-":
//     console.log(firstNumber-secondNumber);
//     break
//     case "*":
//         console.log(firstNumber*secondNumber);
//         break
//     case "/":
//     console.log(firstNumber/secondNumber);
//     break

//     default:
//         break;
// }
// if (operator === "+") {
//     console.log(firstNumber+secondNumber);
// }
// else if (operator === "-") {
//     console.log(firstNumber-secondNumber);
// }
// else if (operator === "*") {
//     console.log(firstNumber*secondNumber);
// }
// else if (operator === "/") {
//     console.log(firstNumber/secondNumber);
// }
// else{
//     console.log("enter correctly variubles");
// }

// let role = prompt("Enter your role");
// if(role=="user") console.log("Xoş geldin user");
// else if(role =="admin")console.log("Xos geldin admin");
// else console.log("Xos geldin qonaq");

//FizzBuzz
// let num = prompt('Enter a number');
// let number = +num;
// if(number%15 === 0)console.log('fizzbuzz');
// else if(number%5 === 0)console.log('fizz');
// else if(number%3 === 0)console.log('buzz');

//let num = prompt('Enter a number');
//let number = +num;
//if (num.length == 2) console.log('reqem ikireqemlidir');

// let num = prompt('Enter a number');
// let num1 = prompt('Enter a number');
// let num2 = prompt('Enter a number');
//let number = +num;
//if(num%10 === 0)console.log('Bu istedigim reqemdir');

// let num = +prompt('Enter a number1');
// let num1 = +prompt('Enter a number2');
// let num2 = +prompt('Enter a number3');
// if(num+num1+num2 > 100) console.log("cemleri kecdi 100u");
//let res = Math.pow(25,0.5);
//console.log(Number(null));
// let userType = prompt("Enter user type");
// switch (userType) {
//   case "admin":
//     console.log("Admin Page");
//     break;
//     case "user":
//       console.log("User Dashboard");
//       break;
//       case "guest":
//     console.log("guest Page");
//     break;
//   default:
//     console.log('404 not found');
//     break;
// }

// let day = prompt("Enter day");
// let lang = prompt("Enter language");
// if (lang == "en") {
//   console.log(`Today is ${day}`);
// }
// if (lang == "en") {
//   switch (day) {
//     case "1":
//       day = "Monday";
//       console.log(`Today is ${day}`);
//       break;
//     case "2":
//       day = "Tuesday";
//       console.log(`Today is ${day}`);
//       break;
//     case "3":
//       day = "Wednesday";
//       console.log(`Today is ${day}`);
//       break;
//     case "4":
//       day = "Thursday";
//       console.log(`Today is ${day}`);
//       break;
//     case "5":
//       day = "Friday";
//       console.log(`Today is ${day}`);
//       break;
//     case "6":
//       day = "Saturday";
//       console.log(`Today is ${day}`);
//       break;
//     case "7":
//       day = "Sunday";
//       console.log(`Today is ${day}`);
//       break;
//     default:
//       break;
//   }
// } else if (lang == "az") {
//   switch (day) {
//     case "1":
//       day = "Bazar ertesi";
//       console.log(`Bugun  ${day} dir`);
//       break;
//     case "2":
//       day = "Cersenbe axsami";
//       console.log(`Bugun  ${day} dir`);

//       break;
//     case "3":
//       day = "Cersenbe";
//       console.log(`Bugun  ${day} dir`);

//       break;
//     case "4":
//       day = "Cume axsami";

//       console.log(`Bugun  ${day} dir`);

//       break;
//     case "5":
//       day = "Cume";
//       console.log(`Bugun  ${day} dir`);

//       break;
//     case "6":
//       day = "Senbe";
//       console.log(`Today is ${day}`);
//       break;
//     case "7":
//       day = "Bazar";
//       console.log(`Today is ${day}`);
//       break;
//     default:
//       break;
//   }
// }
// let weight = +prompt("Enter weight");
// let height = +prompt("Enter your height");
// const B_M_I = weight/(height**2);
// //alert(`Your B_M_I = ${B_M_I}`);
// switch (true) {
//   case B_M_I<18.5:
//     console.log("BMI azdir");
//     break;
//     case B_M_I>18.5 && B_M_I<25:
//       console.log("Normal");
//       break;
//       case B_M_I>25 && B_M_I<30:
//       console.log("Obese");
//       break;
//   default:
//     break;
// }
// for (let i = 0; i < 100; i++) {
//   //(i%3===0 || i%17===0)?console.log(i):null;
//   !(i%3) && console.log(i);

// }

// let multiply = 1;
// for (let i = 1; i < 100; i++) {
//   !(i%7)&& (multiply = multiply * i);;
// }
// console.log(multiply);

// let i = 1;
// let multiply = 1;
// while(i<100){
//   !(i%7)&&(multiply*=i);
//   i++
// }
// console.log(multiply);

// let km = prompt("enter km...");
// let mph = km*0.6
// console.log(mph);

// const Account_Number = 'XXXX XXXX XXXX XXXX';
// const PIN = '****';
// let comparedAccountNumber = prompt("Please enter your account number..");
// let comparedPIN = prompt("Please enter your PIN..");
// if(Account_Number === comparedAccountNumber && PIN === comparedPIN){
//      //console.log("Please enter amount...");
//      let amount = +prompt("Please enter amount...");
//       isNaN(amount) || amount !== 0 || (alert(`Please enter correct number..`))

//      let conf =  confirm(!isNaN(amount)? `Do you wont pull ${amount} AZN`:'');

//     conf && !isNaN(amount) && amount !=0 && console.log(`Your money getting ready...`);
//     conf && !isNaN(amount) && amount !=0 && console.log(`${amount} AZN is ready..`);

//      conf || console.log("Take your card");
// }
// else{
//   console.log("Account number or Pin is wrong");
//   console.log("Take your card");
// }

// for (let j = 4; j >= 0 ; j--) {
//   for (let i = 40-j; i > 0; i--) {
//     document.write("&nbsp");
//   }

//   for (let i = 0; i <=j; i++) {
//     document.write("*");
//   }

//   document.write("<br>")
// }

// let number = Math.round(Math.random() * 50 + 1);
// let step = 0;
// let userNumber;

// while (true) {
//   userNumber = +prompt("Bir eded daxil edin");
//   step++;
//   if (userNumber === number) {
//     alert("Dogrudur");
//     switch (true) {
//       case step == 1:
//         document.write("kapital bank hesabinda 1000 manat kocurulsun");
//         break;
//       case step == 2:
//       case step == 2:
//       case step == 4:
//       case step == 5:
//         document.write("kapital bank hesabinda 750 manat kocurulsun");
//         break;
//       case step == 6:
//       case step == 7:
//       case step == 8:
//       case step == 9:
//         document.write("kapital bank hesabinda 250 manat kocurulsun");
//         break;
//       case step > 10:
//         document.write("kapital bank hesabindan 250 manat cixilsin");
//         break;
//       default:
//         break;
//     }
//     break;
//   } else if (userNumber > number) {
//     alert("boyukdur");
//   } else if (userNumber < number) {
//     alert("kicikdir");
//   }
// }
// console.log(step);

//console.log(eded);
// let factorial = +prompt("Find factorial")
// let multiply = 1;
// for (let i = 1; i <= factorial; i++) {
//   multiply *= i;

// }
// function multiply(n1){
//    let n2 = +prompt("Eded daxil edin");
//    console.log(n1*n2);;
// }
// multiply(6);

// function multiply(a=1,b=1){
//      console.log(a*b);
// }
// multiply();
// function findEvenNumber(n1,n2){
//   for (let i = n1+1; i < n2; i++) {
//     !(i%2)&&console.log(i);

//   }
// }

// findEvenNumber(10,20);

// function getNumber(){
//   let number = +prompt("Eded daxil edin");
//   return number;
// }

// let n = getNumber();
// console.log(n);

// function isEven(a){
//  return !(a%2)
// }
// console.log(isEven(14));


















//****************************************************************************
// function getDividebleBy3InInRange(a, b) {
//   let index = 0;
//   for (let i = a + 1; i < b; i++) {
//     if (!(i % 3)) {
//       index++;
//       if(index === 2) return i;
//     }
//   }
// }
// function getDividebleBy3InInRange_2 (a,b){
//   for(let i = a+4;i<b;i++){
//     if (!(i%3)) {
//       return i;
//     }
//   }
// }
// console.log(getDividebleBy3InInRange(20, 40));
// console.log(getDividebleBy3InInRange_2(24,40));


//let getMinder = n => n%10;
//console.log(getMinder(12));

//let isEven = ed => !(ed%2);
//console.log(isEven(15));

// let average = (n1,n2) => {
//   let aver = (n1+n2)/2;
//  return `${n1} ve ${n2} ededlerinin ededi ortasi ${aver}-dir`
// }

//console.log(average(10,20));
// function a(val){
//   return true - val
// }

// console.log(a(-"4"));
// const example = (cb,n) => {
//   let userPrompt = prompt(n)
//     cb(userPrompt)
  
// }
//example(m => console.log(m),"ne etmek istediyinizi daxil edin..");

//let multiply = (a,b,cb) =>cb(a,b);
//console.log(multiply(5,6,(x,y)=> x*y));

