import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";

const TestComp = () => {
  return (
    <div>
      TestComp
      <button
        onClick={() => {
          store.dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT(TestComp)
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
export default connect(mapStateToProps)(TestComp);
