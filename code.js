

const numberArray = [1, 2, -3, 4, 5];// Define an object that contains methods to perform operations on the array

const arrayHandler = {
  
  numbers: numberArray,  
  
  // Method to double each number in the array
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
  },  
  
  // Method to sum all the numbers in the array
  sumNumbers() {
    console.log("Sum is : " + this.numbers.reduce((sum , index) => sum + index , 0));
  },  
  
  // Method to demonstrate asynchronous operation using promises
  asyncOperation() {
    let myPromise = new Promise((myResolve, myReject) => {
        setTimeout(() => { 
            if(this.numbers.length > 0) 
                {myResolve("Array length : " + this.numbers.length);}
                           
            else {myReject("Error! Empty array");}}, 3000);
    
    });
    return myPromise;
  },  
  
  // Method to demonstrate type coercion
  typeCoercionDemo() {
    //Adding a value directly to the string
    console.log("Add 16 to Array : " + this.numbers + 16)

    //comparing array with a string
    if(this.numbers == '2,4,6,8')
       console.log("My array has even digits only")
  },  
  
  // Method to shuffle the array
  shuffleArray() {
    //we can use the visited array if we want to restrict each index to be visited only once
    //let visited = [];
    let shuffleArr = this.numbers.slice();

    //for(let i = 0; i < shuffleArr.length; i++) {visited.push(false);}
    //console.log(visited)

    for(let j = 0; j < shuffleArr.length; j++) {
      let index = Math.floor(Math.random() * shuffleArr.length);
      console.log("index: " + index)
      //if(visited[index] === false)
      //{
        //visited[index] = true;
        let temp = shuffleArr[index];
        shuffleArr[index] = shuffleArr[j];
        shuffleArr[j] = temp;
      //}
    }
    //console.log(visited)
    console.log("Shuffled Array is : " + shuffleArr)
  },  
  
  // Method to find the maximum number in the array
  findMax() {
    console.log("Maximum :", Math.max(...this.numbers));
  },  
  
  // Method to delay execution for a specified time
  delayExecution(ms) {
    const mypromise = new Promise((resolve) =>
     setTimeout(resolve, ms, this.numbers));
    
     return mypromise;
  },  
  
  // Additional asynchronous operations
  additionalAsyncOperations() {
    const promise1 = Promise.resolve(this.numbers[0]);
    const promise2 = new Promise((resolve) =>
     setTimeout(resolve, 3000, this.numbers[2]) );
    const promise3 = new Promise((resolve) =>
     setTimeout(resolve, 2000, this.numbers[4]));

    return Promise.all([promise1, promise2, promise3]); 
  }
};

console.log("Array:" + this.numbers);
arrayHandler.doubleNumbers();
arrayHandler.squareNumbers();
arrayHandler.sumNumbers();

arrayHandler.asyncOperation()
    .then(size => { console.log(size); })
    .catch(error => { console.log(error); });
    
arrayHandler.typeCoercionDemo();
arrayHandler.filterOddNumbers(); 
arrayHandler.findMax();

arrayHandler.delayExecution(6000)
    .then(output => {console.log("Array displayed after 6 sec : " + output)})

arrayHandler.additionalAsyncOperations()
    .then(output => {console.log(output)})
    .catch(error => { console.log(error); });

arrayHandler.shuffleArray();
