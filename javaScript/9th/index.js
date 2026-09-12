let boxes=document.getElementsByClassName("box");
console.log(boxes);
document.getElementById("redbox").style.backgroundColor="red";
document.querySelector(".box").style.backgroundColor="blue";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
});

document.getElementsByTagName("div")[0].style.backgroundColor="yellow"; 
