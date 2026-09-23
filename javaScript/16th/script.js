async function sleep(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(45);
     },1000)
     })
}

function sum(a,b,c){
    return a+b+c;
} 
//let arr=[1,2,3];
//sum(arr[0],arr[1],arr[2])==sum((...arr)) //...arr=>spread

(async function main(){
    let a=await sleep();
let b=await sleep();
let[x,y,...rest]=[1,2,3,4,5,6];
console.log(x,y,rest);
})()//IIFE Syntax


//const obj{a:1,b:2}
//{a,b}=obj
//let[x,y,...rest]=[1,2,3,4,5,6];
//console.log(x,y,rest);//Destructuring


