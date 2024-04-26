import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import Hello from './hello.png'

//custom hook
const useHighlight = () => {
    const [state, setState] = useState();
  
    const highlight = () => {
      setState(!state);
    };
  
    return [state, highlight];
}

const Routing = () => {

    const [isHighlighted, highlight] = useHighlight(false);

    const BgColor = {
        backgroundColor: isHighlighted ? 'blue' : 'transparent'
      };

    return (
        <div className = 'base'>
           <img src = {Hello} alt = 'cartoon'/>
           <br/>
           <label> </label>
           <Link to = "/Message"> Read More </Link>
           <br/><br/>
           <button onClick={highlight} style={BgColor}>Highligth</button>
           
        </div>
    )
}

export default Routing;