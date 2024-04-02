//Task 2
var num = 4
function cube(num)
{
  return num * num * num;
}

var cubeofnum = cube (2);
var cubeof6 = cube (6);

console.log("cubeofnum : " + cubeofnum + ", cubeof6 : " + cubeof6);


//Task 6
const employee = {
    
        prop: 42,
        name : "Bisma",
        func: function () {
          return (this.prop + this.name);
        }
};

console.log(employee.func())

//Task 4
getText(); //prints HelloWorld
console.log(x); // shows undefined
console.log(getText); //prints the function

//getText2(); //shows error getText2 is not a function because it is allocated undefined as a variable

var x = 6;

//simple function
function getText()
{
  console.log("Hello World");
}

//arrow function
var getText2 = () => {
    console.log("Hello World");
  }
