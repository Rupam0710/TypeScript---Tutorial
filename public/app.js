import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Mario', 'Work on website', 250);
docTwo = new Payment('John', 'Work on design', 350);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// const invOne = new Invoice('Mario','Work on website',250);
// const invTwo = new Invoice('John','Work on marketing',400);
// // console.log(invOne,invTwo);
// let invoices : Invoice[] =[];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invOne.client = 'Ram';
// invoices.forEach(inv=>{
//     console.log(inv.client,inv.amount,inv.format());    
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
