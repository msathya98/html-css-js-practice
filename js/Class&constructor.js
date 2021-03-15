class Colors {
    constructor({ title } ){
        this.title = title;
    }
hello(){
    console.log("hellllo");
}

}

class Green extends Colors {
    constructor(options){
        super(options);
       this.color = options.color;
    }
    message(){
        console.log("message");
    }
}


const green = new Green({ color : 'green', title: "boss"});
console.log(green)
green.message();
green.hello();
