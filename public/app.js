"use strict";
//class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rs.4${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'Work on website', 250);
const invTwo = new Invoice('John', 'Work on marketing', 400);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Ram';
console.log(invoices);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
