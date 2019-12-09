import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import { Counter } from "./Counter";
import Counter2 from "./Counter2";
import UseTodos from "./useTodos";
import UseCounter from "./useCounter";
import ArrayUpdate from "./ArrayUpdate";
import { TestReduxForm } from "./TestReduxForm";

function Redux() {
  return (
    <Provider store={store}>
      <Counter />
      <Counter2 />
      <UseTodos />
      <UseCounter />
      <ArrayUpdate />
      <TestReduxForm />
    </Provider>
  );
}

export default Redux;
