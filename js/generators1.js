function* shopping() {

    const thingsFromStore = yield "cash";

    const cleanClothes = yield "laundry";

    return [ thingsFromStore, cleanClothes ] ;


}


const pen = shopping();
 
console.log(pen.next());

console.log(pen.next("grocaries")); 

console.log(pen.next("clean Cloths"));

