//1

   function Square(r) {
        this.area = function() { return r * r}
    }
    
    var x = new Square(2);
    area(); // give ReferenceError: area is not defined.
  
    //2 

    displayId();
    var displayId = function(){
        console.log("hello") // Gives displayId is not  a function.
    }

    //3
    
    var text = 'outside';
    function logIt(){
        console.log(text);
        var text = 'inside';
    }
    
     logIt(); // Gives undefined
    
