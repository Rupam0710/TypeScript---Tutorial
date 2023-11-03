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

    let values : [string,string,number] =[tofrom.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }
    else{
        doc = new Payment(...values);

    }
    

    list.render(doc,type.value,'end');
    
})


//Generics
const addUID =<T>(obj:T)=>{
    let uid = Math.floor(Math.random()*1000);
    return{...obj,uid};
}

let docThree = addUID({name:'yoshi',age:40});
let docFour = addUID({name:'yoshi'});
console.log(docThree);


//enums

enum ResourceName{BOOK,AUTHOR,FILM,DIRECTOR}

//Generics with interfaces
interface Resource<T>{
    uid:number;
    resourceName : ResourceName,
    data: T;
}


const docFive : Resource<object>={
    uid:1,
    resourceName : ResourceName.BOOK,
    data: {name:'ram',age:40}
}

const docSix : Resource<string[]> = {
    uid:2,
    resourceName : ResourceName.AUTHOR,
    data: ['saree','kurta']
}

console.log(docFive,docSix);

//normal array

let arr = ['abc',20,true];
arr[0]=20;
arr[1]=false;
arr[2]='bcd';
console.log(arr);

//tuple

let tup : [string,number,boolean] = ['SRK',58,false];
// tup[0]=58;
// tup[1]='abc'
tup[0]='abc';
tup[1]=20;
tup[2]=true;

let student : [string,number] = ['Lee',12];
student[0] = 'Joe';
student[1] = 20;


