//class
class Invoice{
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes Rs.4${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Mario','Work on website',250);
const invTwo = new Invoice('John','Work on marketing',400);
console.log(invOne,invTwo);

let invoices : Invoice[] =[];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Ram';
console.log(invoices);



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


