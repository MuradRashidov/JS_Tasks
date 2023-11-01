// let obj1 = {
//     a:1,
//     b:2,
//     x:{
//        name:"asd"
//     }
// }
// let obj2 = {
//     a:1,
//     b:2,
//     x:{
//        name:"asd"
//     }
// }
// console.log(obj1.a===obj2.b);
// console.log(obj1.b===obj2.b);
// console.log(obj1.x===obj2.x);

// let obj = {
//     name:'Murad',
//     age:25

// }
//let obj2 = Object.assign({age:20},obj)
//console.log(obj2);

// let Object = {
//     assign:(p1,p2)=>{
//         for(let key in p2){
//             p1[key] = p2[key]
//         }
//         return p1
//     }
// }
// console.log(Object.assign({},obj));

// let obj = {
//     name:"Murad",
//     age:25
// }
// let obj2 = {
//     name:"R",
//     age:21
// }
// let changeName = (arg1,arg2) => {
//     arg1 = {...arg2}
//     //arg1 === obj2
//     // console.log(arg1);
//     // console.log(arg2);
//     // console.log(obj === arg1);
//     // console.log(obj2 === arg2);
//     return arg1

// }
// console.log(changeName(obj,obj2));
// console.log(obj);
// //console.log(obj2);

// let obj = {
//     name:"x",
//     surname:'y',
//     age:87
// }

// let cloneObj = (newObj) => {
//     //newObj = Object.assign({},obj)
//      newObj = {...obj}
//      return newObj;
// }
// let a = cloneObj({name:"asd",surName:"dfg",age:50});
// a.name = "m"
// console.log(obj);
// console.log(a);

//***************************************************************************************** */
//Constructor tasks
// function Calc(){
//         this.firstValue = +value1;
//         this.secondValue = +value2;

//     this.read=(value1,value2)=>{

//        return {firstValue:this.firstValue,secondValue:this.secondValue}
//     }
//     this.sum=()=>{
//         return this.firstValue + this.secondValue
//     }
//     this.subtract=()=>{
//         return this.firstValue - this.secondValue
//     }
//     this.multiply=()=>{
//         return this.firstValue * this.secondValue
//     }

//     this.devide=()=>{
//         return this.firstValue/this.secondValue
//     }

// }

// let calc = new Calc();

// console.log(calc.read(prompt("Birinci deger"),prompt("Ikinci eger")));
// console.log(calc.sum());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.devide());

// function Car(model,year,owner){
//     this.model = model;
//     this.year =  year;
//     this.owner = owner;
//     this.drawing = () =>  `${this.owner} ${this.model} markali masinina qaz verir.`
//     this.breaking = () => `${this.owner} ${this.model} markali masini dayandirir.`

// }

// let car = new Car("X",1990,"A");
// console.log(car.breaking());

// let soz = "elektrikləşdirdiklərimizdənsinizmi";
// while(soz.includes("i")){
//   soz =  soz.replace("i","I")
// }
// console.log(soz);
//console.log(soz.replaceAll("i", "I"));
