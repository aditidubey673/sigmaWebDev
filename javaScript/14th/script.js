let a = prompt("enter first number");
let b= prompt("enter second number");

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("error no ia not valid");
}
let sum= parseInt(a)+parseInt(b);

try{
    console.log("the sum is",sum*x);
}catch(error){
    console.log("error a gaya bhai");
}
finally{
    
}