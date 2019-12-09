import set from "lodash/fp/set";
import compose from "lodash/fp/compose";
import update from "lodash/fp/update";
import union from "lodash/fp/union";
import get from "lodash/fp/get";

/** Default reducer state */
export const DEFAULT_STATE = {
  byID: {},
  all: []
};

const convertArrayToByIdObject = todos =>
  todos.reduce(
    (res, todo) => ({
      ...res,
      [todo.id]: todo
    }),
    {}
  );

/** Todos Reducer */
export const todosReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "RECEIVE_TODO":
      const todo = action.payload;
      return compose(
        set(["byID", todo.id], todo),
        update("all", todosIds => union(todosIds, todo.id))
      )(state);
    case "RECEIVE_TODOS":
      const newTodos = action.payload;
      const newTodosById = convertArrayToByIdObject(newTodos);
      return compose(
        update("byID", todos => ({ ...todos, ...newTodosById })),
        update("all", todosIds => union(todosIds, newTodos.map(get("id"))))
      )(state);
    default:
      return state;
  }
};
