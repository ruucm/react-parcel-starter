import React from "react";

export function Counter() {
  return (
    <div>
      <h1>react-reducer counter</h1>

      <div>count : {this.props.count}</div>
      <button
        onClick={() => {
          this.props.dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>

      <button
        onClick={() => {
          this.props.dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}
