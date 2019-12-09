import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import { Counter } from "./Counter";
import Counter2 from "./Counter2";
import ArrayUpdate from "./ArrayUpdate";

function ReduxPage() {
  return (
    <Provider store={store}>
      <Counter />
      <Counter2 />
      <ArrayUpdate />
    </Provider>
  );
}

export default ReduxPage;
