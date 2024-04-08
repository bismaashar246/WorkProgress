//number
let num = 16;

console.log("square is: " + num * num);

//String
let message = "Hey my name is Bisma";

console.log(message);

//Boolean
let flag = 5 < 6;

if(flag){
    console.log("Statement is true");
}
else{
    console.log("Statement is false");
}

//null
let leaves = null;
console.log("Leaves are: " + leaves);

//undefined
let age;
console.log("Age is:" + age);

age = undefined;
console.log("Age is:" + age);

//Objects
let Employee = new Object();
Employee.name = "Bisma";
Employee.team = "Marvel";
Employee.id = "12467";

console.log(Employee);
console.log("Name is: " + Employee.name);

//Arrays
let PrimaryColours = ["red" , "yellow" , "blue" , "2" , "64"];

console.log(PrimaryColours);
console.log("Third value is: " + PrimaryColours[2]);
console.log("Fifth value is: " + PrimaryColours[4]);
console.log("Sixth value is: " + PrimaryColours[5]);