let greet : Function;

greet = ()=>{
    console.log('Hello World');
}

const add = (a:number,b:number,c ?: number|string):void=>{
    console.log(a+b);
    console.log(c);
    
}

add(5,10,'ram');

const minus = (a:number,b:number):number=>{
   return a+b;
}

let result = minus(10,7);
console.log(result);

