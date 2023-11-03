import {Invoice} from './classes/Invoice.js'
import { ListTemplates } from './classes/ListTemplates.js';
import {Payment} from './classes/Payment.js'
import { HasFormatter } from './Interfaces/HasFormatter.js';

let docOne : HasFormatter;
let docTwo : HasFormatter;

docOne = new Invoice('Mario','Work on website',250);
docTwo = new Payment('John','Work on design',350);

let docs : HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul= document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }
    else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);

    }
    

    list.render(doc,type.value,'end');
    
})


