

const numberArray = [1, 2, 3, 4, 5];// Define an object that contains methods to perform operations on the array
const arrayHandler = {
  numbers: numberArray,  // Method to double each number in the array
  doubleNumbers() {
    console.log("Double Numbers : " + this.numbers.map(index => index + index))
  },  
  
  // Method to square each number in the array
  squareNumbers() {
    console.log("Square Numbers : " + this.numbers.map(index => index * index))
  },  
  
  // Method to filter out odd numbers from the array
  filterOddNumbers() {
    console.log("Even Numbers : " + this.numbers.filter(index => index % 2 == 0))

    // can be done in a loop using this too => if(this.numbers[i] % 2 != 0
  },  
  
  // Method to sum all the numbers in the array
  sumNumbers() {
    let sum = 0;

    for(let i = 0; i < this.numbers.length; i++) {sum+= this.numbers[i];}
    console.log("Sum is: " + sum);

    //this can be done using reduce method as well
  },  
  
  // Method to demonstrate asynchronous operation using promises
  asyncOperation() {
    // TODO: Implement an asynchronous operation using promises
  },  
  
  // Method to demonstrate type coercion
  typeCoercionDemo() {
    // TODO: Implement a demonstration of type coercion
  },  
  
  // Method to shuffle the array
  shuffleArray() {
    // TODO: Implement shuffling the array
  },  
  
  // Method to find the maximum number in the array
  findMax() {
    let maxNum = 0;
    for(let i = 0; i < this.numbers.length; i++) {maxNum = Math.max(this.numbers[i] , maxNum)}
    console.log("Maximum : " + maxNum)

    //we can also use ... in place of the loop -> console.log("Maximum:", Math.max(...this.numbers));
  },  
  
  // Method to delay execution for a specified time
  delayExecution(ms) {
    // TODO: Implement delaying execution for a specified time
  },  
  
  // Additional asynchronous operations
  additionalAsyncOperations() {
    // TODO: Implement additional asynchronous operations
  }
};

console.log("Array:" + numberArray);
arrayHandler.doubleNumbers();
arrayHandler.squareNumbers();
arrayHandler.sumNumbers();
arrayHandler.filterOddNumbers(); 
arrayHandler.findMax();