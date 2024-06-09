import React, { useState } from "react";

import useCounter from "./hooks/useCounter";

const Counter = () => {
  const [counter, add, remove] = useCounter();

  return (
    <div>
      <div>{counter}</div>
      <button onClick={add}>Add One</button>
      <button onClick={remove}>Remove One</button>
    </div>
  );
};

export default Counter;
