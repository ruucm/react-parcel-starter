import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";

function ReduxPage() {
  return (
    <Provider store={store}>
      <div>hey</div>
    </Provider>
  );
}

export default ReduxPage;
