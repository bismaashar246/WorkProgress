
console.log (a);   //prints undefined
//console.log (b); //shows error cannot be accessed before initialization
//console.log (c); //shows error cannot be accessed before initialization
//console.log (x); //error : not defined

var a = 10;
let b = 20; //can be declared as let b;
const c = 30; // need to be declared here

//let b = "hello"; //syntax error cannot be redeclared
//c = 50; //type error it should be a constant

console.log (a);  
console.log (b);
console.log (c);

function foo()
{
    let x = 1;
    console.log(x);
}
foo();
//console.log(x); //reference error x cannot be accessed
