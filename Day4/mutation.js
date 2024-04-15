function mutation(arr){
    let word1 = arr[0].toLowerCase();
    let word2 = arr[1].toLowerCase();

    console.log("first is: " + word1)
    console.log("second is: " + word2)

    for(let i = 0; i < word2.length; i++)
    {
        if(word1.indexOf(word2[i]) === -1) //using strict equality operator 
           return false;
    }
    return true;
}

console.log(mutation(["hello" , "hEy"]));

//shallow copy vs. deep copy
//same infor but still different objects pointing at different memory references
let obj1 = {name: "John", age: 10};

let obj2 = {name: "John", age: 10};

let obj3 = obj1 //shallow copy = pointing to the same memory location as obj1


//spread operator is deep copy
let a = [1 , 2 , 3]
let b = [...a] //this is spread operator

console.log("a: " + a[1]);
console.log("b: " + b[1]);

b[1] = 6;

console.log("b: " + b[1]);

//checking map
let c = a.map(e1 => e1)
console.log("c: " + c[1]);

//checking slice
let d = a.slice(1); //first value will not be copied
console.log("d: " + d);

