let prom1 =new Promise((resolve,reject)=>{
    let a =Math.random();
    if(a>0.5){
        reject("Promise rejected");
    }else{
        setTimeout(()=>{
            console.log("yes I am done");
            resolve("aditi");
         },3000)
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})