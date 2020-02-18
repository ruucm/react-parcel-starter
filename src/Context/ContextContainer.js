import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import { Store } from "./store";
import { ContextPresenter } from "./ContextPresenter";

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
  function deleteNotification(id) {
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
  }
  function seeNotification(id) {
    {
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
  }
  return (
    <React.Fragment>
      <Store.Provider
        value={{
          ...state,
          setState,
          deleteNotification,
          seeNotification
        }}
      >
        <Header />
        <ContextPresenter />
      </Store.Provider>
    </React.Fragment>
  );
}

export default Comp;
