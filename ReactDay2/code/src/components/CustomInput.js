import React, { useImperativeHandle, forwardRef } from "react";

function Custominput({ style, ...props }, ref) {
  useImperativeHandle(ref, () => ({
    message: () => alert("Your text is entered")
  }));

  return (
    <input {...props} style={{ backgroundColor: 'yellow' }} />
  );
}

export default forwardRef(Custominput);
