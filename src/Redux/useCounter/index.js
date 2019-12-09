import React, { Component } from "react";
import { connect } from "react-redux";
import useCounter from "./useCounter";

const Comp = () => {
  const [count, cLoading, setCount] = useCounter();
  console.log("count", count);
  console.log("setCount", setCount);
  return (
    <div>
      <h2>useCounter</h2>
      count: {count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT(useCounter)
      </button>
    </div>
  );
};

export default Comp;
