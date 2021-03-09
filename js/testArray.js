
var testArray = [{ name:"jai", age:26},
{ name:"Shiva", age:22},
{ name:"Anuj", age:5},
{ name:"Tom", age:20},
{ name:"Jerry", age:20}];

const filteredArray = testArray.filter(array => array.name == "Tom" && array.age == 20  );

console.log(filteredArray);


const ageFilter = testArray.filter(array => array.age > 20 )

console.log(ageFilter);

const sortedArray =  testArray.sort(function(a, b){ return b.age-a.age})


console.log(sortedArray);
