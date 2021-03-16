const array = ['a', 'b', 'c', 'd', 'e'];
const iterator = array[Symbol.iterator]();
const first = iterator.next().value
console.log(first);
iterator.next().value // Since it was skipped, so it's not assigned
const third = iterator.next().value
console.log(third);
iterator.next().value // Since it was skipped, so it's not assigned
const last = iterator.next().value
console.log(last);

const array = ['a', 'b', 'c', 'd', 'e'];
const newArray = [1, ...array, 2, 3];
console.log(newArray);
