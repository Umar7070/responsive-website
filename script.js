

let list = document.querySelector(".list");
let menu =document.querySelector(".menu")
let cross = document.querySelector(".cross")

function humburgMenu (){
  list.classList.toggle("active");
  menu.style.visibility= "hidden";
  cross.style.visibility="visible";
}

function crossMenu(){
  list.classList.remove("active");
  menu.style.visibility="visible"
  cross.style.visibility="hidden";
}