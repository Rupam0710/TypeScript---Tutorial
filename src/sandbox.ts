// let greet : Function;


//1st example
let greet : (a:string , b:string) => void;
greet = (name:string, greeting :string) : void=>{
    console.log(`${name} says ${greeting}`);
    
}

//2nd example
let calc : (a:number,b:number,c:string)=>number;

calc = (numOne:number,numTwo : number, action:string)=>{
   if(action === 'add'){
    return numOne + numTwo;
   }
   else{
    return numOne-numTwo;
   }
}

//3rd example
let logDetails : (obj:{name:string,age:number})=>void;


type ObjectwithAge = {name:string , age:number};
logDetails = (ninja : ObjectwithAge)=>{
   console.log(`${ninja.name}is ${ninja.age} years old`);
}
