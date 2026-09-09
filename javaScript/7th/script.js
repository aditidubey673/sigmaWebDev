let a=prompt("enter a number");
let factorial=1;
for(let i=1;i<=a;i++){
    factorial*=i;
}

let arr=[];
for(let i=0;i<=a;i++){
    arr.push(i);
}
let fact=arr.reduce((fact,a)=>fact*a);
alert("the factorial is "+fact);