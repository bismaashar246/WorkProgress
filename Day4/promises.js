//async vs. promises
/*async function myFunction() {
    return "Hello";
}

function myFunction() {
    return Promise.resolve("Hello");
}*/


//promise using a simple function
let myPromise = new Promise(function(myResolve, myReject) {

    setTimeout(function() 
    {myResolve("Hello! How are you"); }, 3000);

  });


//promise using an arrow function
let myPromise2 = new Promise((resolve, reject) => {
   
    const num = 3;
    
    if (num >= 0.5) {
      resolve("Promise is fulfilled!");
    } else {
      reject("Promise failed!");
    
    }
});

//.then() is the callback for the promise
myPromise.then(function(value) {
    
    console.log(value);

    myPromise2.then(function(value) {
    
        console.log(value);
    });

});

//array of promises
const promise1 = Promise.resolve(`First`);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `Second`)
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Third`)
);

Promise.all([promise1, promise2, promise3]);

Promise.all([promise1, promise2, promise3]).then((values) => {
  
    values.forEach((value) => console.log(value));

});

//when handling multiple fetch requests
/*fetchResource(url)
  .then(handleResult, failureCallback)
  .then(handleNewResult, failureCallback)
  .then(handleAnotherResult, failureCallback);

*/
