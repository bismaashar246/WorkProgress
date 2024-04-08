//for
let sum = 10;
for (let i = 0; i < 5; i++)
{
   console.log("sum is now: " + ++sum);

   if(sum%2 == 0)
   {
      for(let j = 0; j < 2; j++)
          console.log("Even: " + sum);
   }
}

console.log("\nwith while\n");
//while
value = 8
while(value > 10)
{
    console.log("sum is still valid " + value); 
    value-=3;
}

console.log("\nNow with do while\n");
//do while
value = 8
do{
    console.log("sum is still valid " + value);
    value-=3;
}while(value > 10)