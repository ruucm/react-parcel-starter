import React, { Component } from "react";
import { connect } from "react-redux";
import useCounter from "./useCounter";

const Comp = ({ count, dispatch }) => {
  const [todos, loading, error] = useCounter();
  console.log("todos", todos);
  console.log("loading", loading);
  if (error) throw error;
  return (
    <div>
      {/* <Link /> */}
      <h2>Todos list</h2>
      {loading && <span>Loading...</span>}
      {!loading &&
        todos &&
        todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
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
