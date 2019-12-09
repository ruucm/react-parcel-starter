import React from "react";
import { connect } from "react-redux";

export const Counter = connect(state => ({
  count: state.counterReducer.count
}))(({ count, dispatch, ...props }) => (
  <div>
    <h1>react-reducer counter</h1>

    <div>count : {count}</div>
    <button
      onClick={() => {
        dispatch({ type: "INCREMENT" });
      }}
    >
      INCREMENT
    </button>

    <button
      onClick={() => {
        dispatch({ type: "DECREMENT" });
      }}
    >
      DECREMENT
    </button>
  </div>
));

// export function Counter() {
//   return (
//     <div>
//       <h1>react-reducer counter</h1>

//       <div>count : {count}</div>
//       <button
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//         }}
//       >
//         INCREMENT
//       </button>

//       <button
//         onClick={() => {
//           dispatch({ type: "DECREMENT" });
//         }}
//       >
//         DECREMENT
//       </button>
//     </div>
//   );
// }
