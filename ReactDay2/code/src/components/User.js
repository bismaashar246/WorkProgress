import {react} from 'react'
import { useState , useEffect} from 'react';
import Valid from './Valid';

function User(props)
{
    const [turn, setTurn] = useState(0);

    useEffect(() => {
        
        //alert("Turn changed to " + turn);
        console.log("Turn changed to " + turn);

    }, [turn]);

    return(
        <div>
          <h3>Welcome {props.name}!</h3>
          <p>turn: {turn}</p>
          <Valid turn = {turn}/>
          <button onClick={() => setTurn(turn + 1)}>Update Turn</button>
        </div>
    )
}
export default User