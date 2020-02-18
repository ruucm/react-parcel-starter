import * as React from "react";
import { useContext } from "react";
import { Store } from "../store";

export function Counter() {
  const store = useContext(Store);
  return (
    <div>
      Counter
      <button
        onClick={() => {
          store.setState({
            ...store,
            count: store.count + 1
          });
        }}
      >
        click me
      </button>
    </div>
  );
}

Counter.defaultProps = {};
