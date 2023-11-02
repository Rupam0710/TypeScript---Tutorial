//class
export class Invoice {
    // readonly client:string;
    // private details:string;
    // public amount:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rs.4${this.amount} for ${this.details}`;
    }
}
