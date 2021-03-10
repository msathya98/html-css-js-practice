//Write a JS program to compute the sum and product of an array of integers.

let numbers = [10, 20, 30, 40, 50];

 const sum =  numbers.reduce(function(a, b){ return a+b});
 console.log(sum)

 const product =  numbers.reduce(function(a, b){ return a*b});
 console.log(product)
