//simple
function product (num1 , num2 , num3)
{
   return num1 * num2 * num3;
}

console.log("product : " + product(2,4,6));

//currying way 1
function product2(num1) {
    
    return (num2) => {
        
        return(num3) => {
            
            return num1 * num2 * num3;
        }
    }
}

console.log("product2 : "  + product2(2)(4)(6));

//currying way 2
//default fucntion
function currying(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

let result = currying(product, 10);

console.log(result(2 , 4)); //80
console.log(result(5 , 3)); //150
console.log(result()); //NaN
console.log(result(6)); //NaN
console.log(result(6 , 2 , 3)); //120
console.log(result(6 , 2 , 3 , 4)); //120 does not consider the 4th argument