//Task1
// function repeatedSymbolCounter(word,sym){
//     let repeatingCount = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === sym) {
//             repeatingCount++;
//         }
//     }
//     return repeatingCount;
// }

// console.log(repeatedSymbolCounter('ALIONALIAA', 'A'));



//*****************************************************************************************//

//let str = "Asd\\asd\\fgh\\\\jkl";
// console.log(str.charAt(str.length-1));
// for(let key of str){
//     console.log(key);
// }

//console.log(str.charCodeAt(4));
// console.log(str.charAt(4));
// console.log(str.indexOf("g"));
//str = str.replaceAll("a","b");
//console.log(str.slice(2,-4));
//console.log(str.substr(2,3));

//*****************************************************************************************//

// let capitalizeStr = str => {
//     str =  str.replace(str[0],str[0].toUpperCase())
//     return str;
// }

// console.log(capitalizeStr("murad"));

//*****************************************************************************************//
// let snakeToKebab = (snake) => {
//     let kebap = '';
//     for(let key of snake){
//       key !== "_"?kebap += key.toLowerCase():kebap += "-";  
//     }
//       return  kebap;
// }
// console.log(snakeToKebab("BU_TEST_UCUNDUR"));



//*****************************************************************************************//
// let nameFormat = (name) => {

//     let splitedName = name.trim().split(" ");
//     let formatedName = `${splitedName[0][0].toUpperCase()}${splitedName[0].slice(1,splitedName[0].length)} ${splitedName[1][0].toUpperCase()}`
//     return formatedName;
// }
// console.log(nameFormat("murad rashidov"));



//*****************************************************************************************//

// let changeChar = (str,i,char) => {
//     str = str.replace(str[i],char)
//     return str;
// }
// console.log(changeChar("string",3,"f"));

//*****************************************************************************************//
// let  removeCharacterFromString = (str,char) => {
//         let i = str.indexOf(char);
//         let newStr = str.slice(0,i) + str.slice(i+1,str.length);
//         return newStr;
// }
// console.log(removeCharacterFromString("Alion","A"));

//*****************************************************************************************//


// let verifyGmailAddress = (gmail) => {
//     let firstPart = gmail.split("@")[0];
//     return (firstPart.length >=5 && gmail.endsWith("@gmail.com") && true);
// }
// console.log(verifyGmailAddress("murad@gmail.com"));

//*****************************************************************************************//

// let goSchool = () => {
//     let date = new Date();
//     switch (date.getDay()) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         return "Bu gun dersdir"
//         case 0:
//         case 6:
//         return "Heftesonudur"
           
    
//         default:
//             break;
//     }
// }
// console.log(goSchool());
// let date = new Date();
// document.write(date.get()+"</br>"+ date.getM());

// let userAge = (birthDay) => {
//    let date =  new Date();
//    let differ = date - birthDay;
//    let differYear = differ/(1000*60*60*24*30*12)
//    let differMonth = differ/(1000*60*60*24*30)
//    let differDay = differ/(1000*60*60*24)
//    let differHour = differ/(1000*60*60)
//    let differMinute = differ/(1000*60)
//    let differSecond = differ/(1000)
//    return differ;
// }
// var date = new Date(1990, 6, 15, 10, 30, 45, 500); 
// console.log(userAge(date));

// let dayOfWeekNames = {
//     0:"Sunday",
//     1:"Monday",
//     2:"Tuesday",
//     3:"Wednesday",
//     4:"Thursday",
//     5:"Friday",
//     6:"Saturday",
//     getDayName:function(){
//         let day = +prompt("What day is today");
//         if(typeof day != Number || day>6 || day<0) {
//             return "Enter properly value!!!"
//         }
//         return this[day];
//     }
// }
// let mounthNamesOfYear = {
//     0:"January",
//     1:"February",
//     2:"March",
//     3:"April",
//     4:"May",
//     5:"June",
//     6:"July",
//     7:"August",
//     8:"September",
//     9:"October",
//     10:"November",
//     11:"December",
//     getMounthName:function(mounth){
//         if(typeof mounth !==  Number || mounth>11 || mounth<0) {
//             return "Enter properly value!!!"
//         }
//         return this[mounth];
//     }
// }
// document.write(mounthNamesOfYear.getMounthName(3));

