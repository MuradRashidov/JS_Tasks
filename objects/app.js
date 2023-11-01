// let laptop = {
//     name:"Lenovo",
//     model:"Elitebook",
//     price:1500,

//     endirim:(faiz) => {
//        if(+faiz<1) {
//         console.log("Faiz azdir")
//         return
//        };
//        if(+faiz>30){
//         console.log("faiz coxdur");
//         return
//        }
//        console.log(`${laptop.name} ${laptop.model} markali notebooka ${faiz}% endirim edili`);
//     }
// }

// laptop.endirim(prompt("Faiz daxil edin.."))

// let salaries = {
//     x:1000,
//     y:1200,
//     z:1500
// }
// let sum = 0;
// for(let salary in salaries){
//    sum += salaries[salary];

// }
// console.log(sum);

// let employee = {
//     employeeId:1,
//     employeeName:"X",
//     employeeLastName:"Y",
//     jop:"asd",
//     salary:1000,
//     company:"asdfdf",
//     age:25,
//     getFullName:()=>{
//         return `${employee.employeeName} ${employee.employeeLastName}`
//     },
//     hbd:()=>{
//         employee.age += 1
//     },
//     infoEmo:()=>{
//         return `${employee.employeeName} ${employee.company} da isleyir`
//     },
//     upgradeSalary:(a)=>{
//         employee.salary += a;
//     }
// }

// employee.upgradeSalary(100);
// console.log(employee.salary);

// let obj = {
//     name:"murad",
//     age:25,
//     a:{
//         x:1,
//         y:2
//     }
    
// }
// let obj2 = {
//     name:"murad",
//     age:25,
//     a:{
//         x:1,
//         y:2
//     }
// }
// obj = obj2
// obj.a.x=10
// console.log(obj2.a.x);
// obj = {
//     first:"A",
//     second:"B"
// }
// let propTwoTaker = (obj) => {
//     return obj.second
// }
// //console.log(propTwoTaker(obj));
// let propTaker = (obj,str) => {
//     return obj[str];
// }
// //console.log(propTaker({name:"A",age:25},"name"));
// let excistAndTruthy = (obj,key) => {
//       if(key in obj && obj[key]) console.log("excist and truthy");
//       else console.log(false);
      
// }
// //excistAndTruthy({name:'A',lName:'Y',customerId:null},'customerId');
// let person = {
//     name:"Murad",
//     surName:"Rashidov",
//     age:"25",
//     birthDay:{
//         day:"01",
//         mounth:"01",
//         year:"0000",
//         getFullBirthday:() => `${person.birthDay.day}/${person.birthDay.mounth}/${person.birthDay.year}`
//     },
//     address:{
//         country:"Azerbaijan",
//         city:"Baku",
//         home:"XXXXX",
//         postCode:1234,
//         getFullAddress:() => {
//             return `Men ${person.address.country}in ${person.address.city} seherinin ${person.address.home} qesebesinde yasayiram`;
//         }
//     },
//     contact:{
//         phoneNumber:"*************",
//         email:"xxxxxxxxxxxxxxxx@gmail.com"
//     },
//     getFullInfo:()=>{
//         return `Hi, I'm ${person.name} ${person.surName} ,
//         I'm ${person.age} years old and 
//         I was born ${person.birthDay.getFullBirthday()},
//         ${person.address.getFullAddress()},
//         My phone number is ${person.contact.phoneNumber}
//         and my email is ${person.contact.email}
//         `
        
//     }

    

// }
// console.log(person.getFullInfo());