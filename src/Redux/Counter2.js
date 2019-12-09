import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/store";

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
    count: state.appReducer.count
  };
}
export default connect(mapStateToProps)(Comp);
