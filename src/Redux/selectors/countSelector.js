import { createSelector } from "reselect";

export const getCount = createSelector(
  state => state.appReducer,
  appStates => {
    console.log("appStates", appStates);
    return appStates.count;
  }
);
