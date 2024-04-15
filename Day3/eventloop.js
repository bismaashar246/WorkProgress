//max call stack error
//this enters an infinite loop
/*function a(){
    return a();
}
a();*/

//sync
let arr = [1 , 2 , 6 , 8]

arr.forEach(function(i){
   console.log("sync: " + i);
});

//async
function asyncForEach(arr , i){
    arr.forEach(function(){
        setTimeout(i , 0);
     });
}

asyncForEach(arr , function(i){
    console.log("async: " + i);
});

//sync code -> micro -> macro
console.log("Start"); //sync code

setTimeout(function() {
  console.log("Timeout"); //macroTask
}, 0);

Promise.resolve().then(function() {
  console.log("Promise"); // microTask
});

console.log("End"); //sync code


//RequestAnimationFrames vs. setTimeout
var interval = 0;

function showText(){
    console.log("Hello there!");
}

setTimeout(showText , 3000);
//setInterval(showText , 3000);