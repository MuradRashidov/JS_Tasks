
// for(let a of arr){
//     console.log(`student ${a}`);
// }
// let value =  arr.includes("Nihad") && true;

// console.log(value);
// for(let el of arr.slice(2,5)){
//     console.log(el);
// } 

        // let arr = [];
        // arr.length = 5;
        // let multiply = 1;

        // for (let i = 0; i < arr.length; i++) {
        //      arr[i] = prompt(`Array-in ${i}-ci elementini daxil edin`);
        //      multiply *= arr[i];
            
        // }

        // console.log(multiply);

        // let getMultiply = (...params) => {
        //     for (let i = 0; i < params.length; i++) {
        //        multiply *= params[i]                
        //     }
        //     return multiply;
        // }
        
// console.log(getMultiply(12,15,10));
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(data => data.forEach(user=>{
//     document.write(`
//     UserName: ${user.username} <br>
//     Email incere:${user.email} <br>
//     Company Name ${user.company.name} <br> <br>
    
//`);
// }))

//let arr = ['ali','aslan','rahmali','mukhtar','sada','bali','sabina','alidadas','alisahib','bahruz'];
// let arr1 = arr.filter((el)=>(el.length>4 && el.length<8))
// let name = arr.find(el=>(el[el.length-1]==="i" && el.length === 4))
// let condition = arr.every(word=>word.includes("a"))
// let condition2 = arr.some(word=>word.includes("z"))
// console.log(name);

// let _longestName = arr.reduce((a,b)=>a.length>b.length?a:b)
// console.log(_longestName);

// let users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json())
// .then(users => users.forEach(user=>document.write(`
// username:${user.username} <br>
// email: ${user.email}<br>
// company:${user.company.name}<br><br>
// `)))
let users = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs":"target end-to-end models"
        }
      }
    ]
//  users.forEach(user=>document.write(`
//  username:${user.username} <br>
//  email: ${user.email}<br>
//  company:${user.company.name}<br><br>
//  `))

//  function getUserByName(username){
//         let searchingUser;
//         users.forEach(user=>{
//            user.name === username?searchingUser=user:null;
//            //console.log(user.name === username);
//         })
//         return searchingUser;
//  }
//  document.write(
//         `
//         Username: ${getUserByName("Leanne Graham").username}<br>
//         Email: ${getUserByName("Leanne Graham").email}<br>
//         Company:${getUserByName("Leanne Graham").company.name}
//         `
//         );
//         //getUserByName("Leanne Graham") = {};
//         //users[0]={}
//         console.log(users);

// let reverseSentence = (sentence) => {
//     return sentence.split(" ").reverse().join(" ");
// }

//console.log(reverseSentence("asd dfg fgh ghj"));
// let reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("asdfg"));

// let getCharCode = (char) => {
//    return char.charCodeAt(0);
// }

// console.l og(getCharCode("a"));

let a = (arr) => {
  return arr.every(x =>{
    return x
  })
}
document.write(a([0,1,1,"2"]));
//a([1,1,1,"2"])


