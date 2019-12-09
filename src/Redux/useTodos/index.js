import React, { Component } from "react";
import { connect } from "react-redux";
import useTodos from "./useTodos";

const Comp = () => {
  const [todos, loading, error] = useTodos();
  if (error) throw error;
  return (
    <div>
      <h2>Todos list</h2>
      {loading && <span>Loading...</span>}
      {!loading &&
        todos &&
        todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
};

export default Comp;
