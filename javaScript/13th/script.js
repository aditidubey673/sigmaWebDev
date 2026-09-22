//settle -> resolve or reject
//resolve->promise has settled successfully    
//reject->promise has not settled successfully

// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000)
//     })
// }

//POST data ko submit (sensitive data) karne ke liye use hota hai
//GET data ko retrieve karne ke liye use hota hai
//PUT data ko update karne ke liye use hota hai
//DELETE data ko delete karne ke liye use hota hai

async function getData(){
    // Simulate getting data from a server
    //let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers:{
            'content-type':'appliction/json; charset=UTF-8'
        },
      })

      let data=await x.json();
      return data;
}

async function main(){


console.log('loading Modules');
console.log('do something else');
console.log('load data');
let data = await getData();

console.log(data);
console.log('Prosessing data');
console.log('task2');
}
main();

// Example POST method implementation :
//async function postData(url = '', data = {}) {
  // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// postData('https://jsonplaceholder.typicode.com/posts', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });//

// data.then((v)=>{
// console.log(v);
// console.log('Prosessing data');
// console.log('task2');

// })