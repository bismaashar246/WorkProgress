import React, { useEffect , useRef} from 'react'

function Counter1({number}){

    const prevNumber = useRef()

    //has hooks in place of componentDidMount
    useEffect(() => {
        console.log("Functional component's mounting")
        
        prevNumber.current = number

        return () => { //will be called when button removed
            console.log("Functional component's unmounting")
        }

    }, [number]) //dependency = it will only work when this changes

    function name(user){
        return user.fName + ' ' + user.lName;
    }
    const text = 'New count : ' 

    const user = {fName: 'Sara' , lName: ''}

    const element = (
        <div>
            <h2>I am message 1</h2>
            <h4>I am message 2</h4>
        </div>
    )
    //Task2
    //name is a function that can be dynamically called
    //{number} is embedded and dynamically changed
    //{text} is declared and passed as jsx element
    //element may contain more than one thing
    return (
        <div>
          <h4>Hey!{name(user)}</h4> 
          <h3>{text}{number}</h3> 
          <h3>previous count was: {prevNumber.current}</h3> 
          <h3>{element}</h3>
        </div>
    )
}

export default Counter1;