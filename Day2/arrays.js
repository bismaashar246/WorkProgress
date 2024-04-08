let fruits = ["apple" , "mango" , "grapes" , "berries"];
let digits = [2 , 4 , 6, 8];

console.log("\n" + fruits[2]);
console.log(digits[2]);

//concat
let merge = fruits.concat(digits);

console.log("\n" + merge);

//copyWithin
fruits.copyWithin(2, 0); 
console.log("\n" + fruits);
fruits.copyWithin(2, 0, 2); 
console.log("\n" + fruits);

//enteries
const list = fruits.entries();
console.log("\n" + list);

//every
if(digits.every(check))
console.log("\nYes all are digits");

//forEach
digits.forEach(check2);

function check(num)
{
    return num < 10;
}

function check2(num)
{
    if(num < 10)
    {
        console.log("\nYes all are digits using forEach");
    }
}

//fill
fruits.fill("mango");
console.log("\n" + fruits)

//filter
let res = digits.filter(vals);
console.log("\n" + res)

function vals(num)
{
    return num > 4;
}

console.log("\n" + digits.findIndex(vals));

//flat
let arr1 = [[1,2],[3,4],[5,6]];
let arr2 = arr1.flat();
console.log("\n" + arr2);

//flatMap
let arr3 = arr2.flatMap((x) => x*2); //on a flat array
console.log("\n" + arr3);

//pop - remove last element 
arr3.pop();
//shift - remove first element
arr3.shift();
console.log("\n" + arr3)

//push - add to end
arr3.push(22);
//unshift - adds at start
arr3.unshift(5);
console.log("\n" + arr3)

//reverse
console.log("\n" + arr3.reverse())

//reduce right 
console.log("\n" + arr3.reduceRight(subtract))

function subtract(total , val)
{
   return total - val;
}

//sort 
console.log("\nsorted array: " + arr3.sort(function(a, b){return a-b}));

//slice
console.log("\n" + arr3.slice(1, 3))

//splice
fruits.splice(2 , 1 , "Kiwi" , "Melon")
console.log("\n" + fruits);

console.log("\nsorted array: " + fruits.sort());
