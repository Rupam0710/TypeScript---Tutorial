type StringOrNum = string|number;
type ObjectWithUiD = {name : string,uid : StringOrNum};

const logDetails = (uid : StringOrNum,items:string)=>{
    console.log(`${items} has an uid of ${uid}`);
    
}

const greet = (user : ObjectWithUiD)=>{
    console.log(`${user.name} says hello`);
    
}

