import { createSelector } from "reselect";

export const todosByID = state => state.todosReducer.byID;
export const allTodosIDs = state => {
  console.log("state", state);
  return state.todosReducer.all;
};
export const counts = state => state.appReducer;

export const makeGetTodoByID = id =>
  createSelector(todosByID, todos => todos[id]);

export const getTodos = createSelector(allTodosIDs, todosByID, (ids, todos) => {
  return ids.map(id => {
    return todos[id];
  });
});
