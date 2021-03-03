let student = {
               name: "Sathaya M",
               fatherName: "Manjunath",
               id: "07352"
};

let studentCopy1 = { 
    ...student
}
console.log(studentCopy1);


let studentCopy2 = Object.assign({}, student)
console.log(studentCopy2);

let studentCopy3 = JSON.parse(JSON.stringify(student));

console.log(studentCopy3);

