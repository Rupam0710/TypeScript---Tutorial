//interfaces

interface IsPerson{
    name: string,
    age: number,
    speak(a:string):void,
    spend(a:number):number,
}

const me : IsPerson={
    name:'Sam',
    age:20,
    speak(text:string):void{
        console.log(text);
        
    },
    spend(amount:number):number{
       console.log(`I spent`,amount);
       return amount;
    }
}

console.log(me);

const greet = (person :IsPerson)=>{
   console.log('hello',person.name);
   
}

console.log(greet(me));



let someone :IsPerson;


import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('Mario','Work on website',250);
const invTwo = new Invoice('John','Work on marketing',400);
console.log(invOne,invTwo);

let invoices : Invoice[] =[];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'Ram';


invoices.forEach(inv=>{
    console.log(inv.client,inv.amount,inv.format());    
})




const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})


