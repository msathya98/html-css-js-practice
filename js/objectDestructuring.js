let obj = {
    name: 'foo',
    id: '10',
    addr: {
        city: "banglore",
        state: "kar"

    }
}


 let{addr:{city}} = obj;

 console.log(city); // Gives banglore
