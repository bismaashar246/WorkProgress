import React , {Component} from "react";


class Animal extends Component{
   constructor(props){
    super(props)
     this.name = props
   }

   bark(){
    console.log(`${this.name} does woof woof`)
   }

   quack(){
    console.log(`${this.name} does woof woof`)
   }

   eat(){
    console.log(`${this.name} eats`)
   }

}

const dog = new Animal({name :'dog'})
dog.bark();
dog.eat();

const duck = new Animal({name : 'duck'})
duck.quack();
duck.eat();

export default Animal