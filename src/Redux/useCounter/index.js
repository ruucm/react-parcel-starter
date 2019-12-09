import React, { Component } from "react";
import { connect } from "react-redux";
import useTodos from "./useTodos";
import useCounter from "./useCounter";

const Comp = () => {
  const [todos, loading, error] = useTodos();
  if (error) throw error;

  const [count, cLoading, setCount] = useCounter();
  console.log("count", count);
  console.log("setCount", setCount);
  if (error) throw error;
  return (
    <div>
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

export default Comp;
