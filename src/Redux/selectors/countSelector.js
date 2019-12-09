import { createSelector } from "reselect";

export const counts = state => state.appReducer;

export const makeGetTodoByID = id =>
  createSelector(todosByID, todos => todos[id]);

export const getCount = createSelector(counts, counts => {
  console.log("counts", counts);
  return counts.count;
});
