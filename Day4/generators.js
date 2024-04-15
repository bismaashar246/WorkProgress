function* func() {
    yield 1
    yield 3
    console.log("hello")
    yield 2
    yield 3
}

const generatorObject = func()

//first three will show 1 , 2, 3, value because three yields fourth will be undefined
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

//yield in loop
function* count() {
    let c = 1
  
    while (true) {
        const val = yield c
      if(val != null){
        c+= val;
      }
      c++
    }
  }
  
  const gen = count()
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.return(10)) //after this next(2) will be undefined
  console.log(gen.next(2).value) // passing a value 3 + (2) = 5


