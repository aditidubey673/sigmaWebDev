document.querySelectorAll(".box").forEach(e=>{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    e.style.backgroundColor=`rgb(${r},${g},${b})`;  
    let ra=Math.floor(Math.random()*256);
    let ga=Math.floor(Math.random()*256);
    let ba=Math.floor(Math.random()*256);
    e.style.color=`rgb(${255-ra},${255-ga},${255-ba})`;
})