import React from "react";
import { useState } from "react";


function Warning(props) {
    if (!props.warn) 
    {   
         return null;  
    }
    return (
      <div>
        Warning message!
      </div>
    );
  }
  
  function Banner() {

    const [banner , setBanner] = useState();
  
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />      
            <button onClick={() => setBanner(banner)}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
  }

  export default Banner;