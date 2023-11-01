let todoInput = document.querySelector(".todoInput");
let addTodo = document.querySelector(".addTodo");
let todoList = document.querySelector(".todoList");
let todos = [];



function showTodos(){
    
     todoInput.value &&   todos.push(todoInput.value);
    //console.log(todos);
   let elements =  todos.map(todo => `
   <li  class="d-flex justify-content-between align-items-center bg-dark text-light p-2 rounded-3 mb-1">
   <span>${todo}</span>
   <div class="d-flex align-items-center"  style="cursor: pointer;">
   <p onclick=delTodo(event) class="m-0 p-0">❌</p>
   <p onclick=updateTodo(event) class="m-0 p-0"> ✏</p>
   <p onclick=fulfilTodo(event) class="m-0 p-0"> ✔</p>
   <div>
   
   </li>
   `)
       todoList.innerHTML =   ""

   elements.forEach(el => {
    todoList.innerHTML += el
   })
   todoInput.value=""

}
addTodo.onclick = showTodos;
function delTodo(e){
    console.log(e.target.parentElement.previousElementSibling.textContent);
    let deletedItem = e.target.parentElement.previousElementSibling.textContent;
    todos = todos.filter(todo => todo != deletedItem)
    showTodos();
        console.log(todos);

    
}
function fulfilTodo (e){
//console.log(e.target.parentElement.previousElementSibling.style);
let target = e.target.parentElement.previousElementSibling.style;
target.color = "lime";
target.textDecoration = "line-through"


}
function updateTodo(e){
    let updatedItem = e.target.parentElement.previousElementSibling.textContent; 
       let newValue = prompt("yeni deger yazin",updatedItem)

    todos.splice(todos.indexOf(updatedItem),1,newValue)
    showTodos();
}