//1
const  student = {
                   name: "Sathaya M",
                   fatherName: "Manjunath",
                   id: 07352
    };

    console.log(student);

    //2
    function vehicle(name, company, engine){
        this.name = name;
        this.company = company;
        this.engine = engine;
    }
    
    let car = new vehicle('Fortuner', "Toyota", "2755cc");

    console.log(car);


   //3
    const anotherStudent = Object.create(student);
    anotherStudent.name = "Mahi";
    anotherStudent.fatherName = "Rangashetty";
    anotherStudent.id = 026327

    console.log(anotherStudent);

    //4
   class vehicles{
     constructor(name, company, engine){
        this.name = name;
        this.company = company;
        this.engine = engine;
    }

   }
    
   let car1 = new vehicles('Creta', "Hyundai", "1497cc");
