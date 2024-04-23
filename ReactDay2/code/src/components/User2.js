import React, { Component } from "react";

class User2 extends Component {
  render() {

    const { name , person} = this.props;

    return (
      <div>
        {person ? (
          <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </div>
        ) : (
          <p>Hello, {name}!</p>
        )}
  
      </div>
    );
  }
}

export default User2;
