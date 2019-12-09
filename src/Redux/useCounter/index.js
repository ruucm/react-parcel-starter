import React, { Component } from "react";
import { connect } from "react-redux";
import useCounter from "./useCounter";

const Comp = () => {
  const [count, setCount] = useCounter();
  return (
    <div>
      <h2>useCounter</h2>
      count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>INCREMENT(useCounter)</button>
    </div>
  );
};

export default Comp;
