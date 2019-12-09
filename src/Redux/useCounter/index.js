import React, { Component } from "react";
import { connect } from "react-redux";

const Comp = ({ count, dispatch }) => {
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

function mapStateToProps(state) {
  return {
    count: state.counterReducer.count
  };
}
export default connect(mapStateToProps)(Comp);
