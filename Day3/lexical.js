//c() inside a() is a closure
function a(){
    const num = 12;
    c();

    function c(){

        const num2 = 26
        console.log("Inside the func: " + num);

        function b(){
            console.log(num , num2);
        }

        b();
    }
    c();
    return c;
}

a();

//testing closures
let z = a();
console.log(z); //show function c
z(); //will still print 12


//console.log("Outside the func: " + num); //will show error not defined

