import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/store";

const Comp = () => {
  return (
    <div>
      CounterWithSelector
      <button
        onClick={() => {
          store.dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT(CounterWithSelector)
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
