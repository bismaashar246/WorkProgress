//interview questions

//a loop working with let
function a(){
    
    for (let i = 1; i < 6; i++){

    setTimeout(function (){
        console.log(i);
    }, i * 1000);
    
   }
   console.log("func a");
}

//modify the above function using var and closure
function b(){
    
    for (var j = 1; j < 6; j++){

    function closure(j){
        setTimeout(function (){
            console.log(j);
        }, j * 1000);
    }
    closure(j)
    
   }
   console.log("func b");
}

//note that a and b execute simultaneously because no Promises/callbacks used
a();
b();