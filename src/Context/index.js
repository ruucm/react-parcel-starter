import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Notification from "./Notification/index";
import Header from "./Header";
import { Store } from "./store";

function Comp() {
  const [state, setState] = useState({
    notifications: {
      "1": {
        id: 1,
        text: "Sup!",
        seen: false
      },
      "2": {
        id: 2,
        text: "Wasup!",
        seen: false
      },
      "3": {
        id: 3,
        text: "Waza!",
        seen: false
      }
    },
    count: 0
  });
  return (
    <React.Fragment>
      <Store.Provider
        value={{
          ...state,
          setState,
          deleteNotification: id => {
            console.log("deleteNotification");
            console.log("id", id);

            setState({
              notifications: {
                "1": {
                  id: 1,
                  text: "Sup!",
                  seen: false
                },

                "3": {
                  id: 3,
                  text: "Waza!",
                  seen: false
                }
              }
            });
            // Not work below thing cause it is immutable
            // setState(prevState => {
            //   const newState = delete prevState.notifications[id];
            //   return delete prevState.notifications[id];
            // });
          },
          seeNotification: id => {
            setState(prevState => {
              return {
                ...prevState,
                notifications: {
                  ...prevState.notifications,
                  [id]: {
                    ...prevState.notifications[id],
                    seen: true
                  }
                }
              };
            });
          }
        }}
      >
        <Header />
        <Store.Consumer>
          {store => {
            console.log("new store!", store);
            return Object.keys(store.notifications).map(key => {
              return (
                <Notification
                  key={store.notifications[key].id}
                  id={store.notifications[key].id}
                  text={store.notifications[key].text}
                  seen={store.notifications[key].seen}
                />
              );
            });
          }}
        </Store.Consumer>
      </Store.Provider>
    </React.Fragment>
  );
}

export default Comp;
