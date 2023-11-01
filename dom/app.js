//console.log(document.querySelectorAll("button"));
let body = document.querySelector("body");
// console.log(body);
// document.querySelectorAll("button").forEach(btn=>{
//     btn.onclick = function(e){
//         //body.style.backgroundColor = btn.style.backgroundColor;
//         body.className = btn.className;

        
//     }
// }
//     )
let input = document.querySelector("input");
let button = document.querySelector("button");
let circle = document.querySelector(".circle");
button.onclick = (e) =>  {
    let inputValue = input.value;
    let div = document.createElement("div")
    
    if (inputValue<10 || inputValue>100) {
        div.innerHTML = "Provide a value 10 - 100 interval";
        body.appendChild(div);
        return;

    }
    
        let p = 3.14;
    let radius = inputValue/2;
    let uzunluq = 2*p*radius;
    let sahe = p*radius**2;
    circle.style.width = inputValue + "px";
    circle.style.height = inputValue + "px";
    circle.style.border = "1px solid gray";
    circle.style.borderRadius = "100%";
    div.innerHTML = `
    Cevrenin sahesi: ${sahe}
    Cevrenin Uzunlugu: ${uzunluq}
    `


    
    body.appendChild(div);

}
