// let obj={
//     a:1,
//     b:"Aditi"
// }

// console.log(obj);

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };

// rabbit.__proto__= animal; //sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name){
        this.name=name;
       console.log("object is created...");
    }
    eats(){
         console.log("kha rahi hoon");
    }

    jumps(){
        console.log("kood rahi hoon");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("roar");
    }
}
let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);