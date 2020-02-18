import * as React from "react";
import { useState, useContext } from "react";
import { Store } from "./store";
import Notification from "./Notification/index";

export function ContextPresenter() {
  const store = useContext(Store);

  console.log("store!!", store);

  return (
    <div>
      {Object.keys(store.notifications).map(key => {
        return (
          <Notification
            key={store.notifications[key].id}
            id={store.notifications[key].id}
            text={store.notifications[key].text}
            seen={store.notifications[key].seen}
          />
        );
      })}
    </div>
  );
}

ContextPresenter.defaultProps = {};
