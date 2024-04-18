import React from 'react';

class Clock extends React.Component {

    constructor(props) { //add a constructor to assign this.sate
        super(props); //always do this
        this.state = {date: new Date()}; //new Date object 
    }

    render() {
      return (
        <div>
          <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
        </div>
      );
    }
  }

  export default Clock