const square = function(arr){
    return arr*arr;
}

const cube = function(arr){
    return arr*arr*arr;
}

//one function that will handle all logics
const calculate = function(arr , logic){
   
    const result = []
    for(let i = 0; i < arr.length; i++)
    {
        result.push(logic(arr[i]))
    }
    return result;
}

const arr = [1 , 2 , 3 , 4]
console.log("square is: " + calculate(arr, square));
console.log("cube is: " + calculate(arr, cube));

//now using map
console.log("square with map: " + arr.map(square));

//Array.prototype.calculate can also be used and with that
//we can write console.log(arr.calculate(square)) same like map