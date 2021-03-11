let obj = {
    num: 2,
    value: 3
}

let method = {
    x: 2,
    y: function(a, b){
         return this.num + a + b;
    }
}

console.log(method.y.call(obj, 1, 2 ));
var arr =[1,2];
console.log(method.y.apply(obj, arr ));
let bound = method.y.bind(obj,1,3);
console.log(bound());


let obj2 = {
    name: "pqr"

}

let obj1 = {
    name: "abc",
    getName: function() {
    
     return this.name;
    }
}

console.log(obj1.getName.call(obj2 ));
