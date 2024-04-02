//Task 5
var x = 1;
aa();  //executes first prints 10
bb();  //executes second prints 10
console.log(x); //executes last prints 1

function aa()
{
   var x = 10;
   console.log(x);
}

function bb()
{
    var x = 100;
    console.log(x);
}

