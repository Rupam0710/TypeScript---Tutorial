import {HasFormatter} from '../Interfaces/HasFormatter.js'

//class
export class Payment implements HasFormatter{
    // readonly client:string;
    // private details:string;
    // public amount:number;

    constructor(
        readonly recipient:string,
        private details:string,
        public amount:number,
    ){}      
    

    format(){
        return `${this.recipient} is owed Rs.${this.amount} for ${this.details}`;
    }
}