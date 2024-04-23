import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function AlertButton({ message = "", onClick, children }) {
  return (
    <button onClick={onClick || (() => alert(message))}>
      {children}
    </button>
  );
}

export default function Player() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <br />
      <p>Selection count: {state.count}</p>
      <AlertButton
        onClick={() => dispatch({ type: INCREMENT })}
        message="Player selected!"
      >Player Select</AlertButton>
      &nbsp;&nbsp;
      <AlertButton
        onClick={() => dispatch({ type: DECREMENT })}
        message="Player dropped!"
      >Player Drop</AlertButton>
    </div>
  );
}
