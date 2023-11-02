//class
export class Invoice{
    // readonly client:string;
    // private details:string;
    // public amount:number;

    constructor(
        readonly client:string,
        private details:string,
        public amount:number,
    ){}      
    

    format(){
        return `${this.client} owes Rs.4${this.amount} for ${this.details}`;
    }
}