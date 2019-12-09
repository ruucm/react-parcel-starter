import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";

const Comp = () => {
  return (
    <div>
      Counter2
      <button
        onClick={() => {
          store.dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT(Counter2)
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
    testArray: state.testArray
  };
}
export default connect(mapStateToProps)(Comp);
