import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";

const Comp = ({ testArray, dispatch, ...props }) => {
  return (
    <div>
      <div>test array</div>
      {console.log("testArray", testArray)}
      {map(testArray, (item, id) => {
        return <div key={id}>{item.text}</div>;
      })}

      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_ARRAY",
            data: [
              ...testArray, // for non mutating update to avoid not re-render
              {
                text: "c"
              }
            ]
          });
        }}
      >
        UPDATE ARRAY
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
