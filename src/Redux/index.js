import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import { Counter } from "./Counter";

function ReduxPage() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxPage;
