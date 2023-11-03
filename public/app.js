import { Invoice } from './classes/Invoice.js';
import { ListTemplates } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Mario', 'Work on website', 250);
docTwo = new Payment('John', 'Work on design', 350);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'yoshi', age: 40 });
let docFour = addUID({ name: 'yoshi' });
console.log(docThree);
//enums
var ResourceName;
(function (ResourceName) {
    ResourceName[ResourceName["BOOK"] = 0] = "BOOK";
    ResourceName[ResourceName["AUTHOR"] = 1] = "AUTHOR";
    ResourceName[ResourceName["FILM"] = 2] = "FILM";
    ResourceName[ResourceName["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceName || (ResourceName = {}));
const docFive = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: { name: 'ram', age: 40 }
};
const docSix = {
    uid: 2,
    resourceName: ResourceName.AUTHOR,
    data: ['saree', 'kurta']
};
console.log(docFive, docSix);
