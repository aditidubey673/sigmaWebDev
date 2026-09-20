let box =document.querySelector(".box");

box.addEventListener("click",(e)=>{
    alert("hello");
    box.style.backgroundColor="red";
    e.stopPropagation();
})

let container = document.querySelector(".container");

container.addEventListener("click",()=>{
    alert("container clicked");
    container.style.backgroundColor="blue";
})