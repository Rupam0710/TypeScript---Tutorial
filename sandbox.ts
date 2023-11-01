//explicit types
let character:string;
let age : number;
let isLoggedIn : boolean;

// age = 'rohit'
age = 15;

// isLoggedIn = 25
isLoggedIn = false;

//arrays
let ninjas : string[]
ninjas = ['ram','sam'];
ninjas.push('ro');
console.log(ninjas);

//union
let mixed : (string | number | boolean)[] = [];
mixed = ['ram',15,true,false,'sam'];
mixed.push(20);
console.log(mixed);

let uid : string|number;
uid = 123;
uid = 'ab1';


//object
let obj1 : object;
obj1 = {
    name : 'Takeshi',
    age : 21
}
let obj2: {
    name : string,
    age: number,
    belt : string,
}
obj2 ={
    name : 'ash',
    age : 32,
    belt : 'black'
}
console.log(obj2);




