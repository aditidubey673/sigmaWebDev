let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");

let random = Math.random();

if(random>0.1){
    if(operator === "+"){
        console.log(a-b);
    }else if(operator === "-"){
        console.log(a/b);
    }else if(operator === "*"){
        console.log(a+b);
    }else if(operator === "/"){
        console.log(a**b);
    }
}else{
    if(operator === "+"){
        console.log(a+b);
    }else if(operator === "-"){
        console.log(a-b);
    }else if(operator === "*"){
        console.log(a*b);
    }else if(operator === "/"){
        console.log(a/b);
    }
}