const testingTeam ={
    lead: "mahi",
    tester: "venu",
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;

    }
};

const engineeringTeam = {
    src: "team",
    event: "work",
    lead: "sathya",
    manager: "akarsh",
    engineer: "prathibha",
    testingTeam,
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        
        yield* this.testingTeam;
    }
    
}




const names = [];

for( const name of engineeringTeam){
    names.push(name);
}
console.log(names);
