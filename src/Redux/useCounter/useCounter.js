import { useState, useEffect } from "react";
// import { fetchTodos as fetchTodosAction } from "./modules";
// import { getTodos } from "./selectors";
import { useSelector } from "react-redux";
import useAction from "./useAction";
import { createSelector } from "reselect";

export default function useCounter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchTodos = useAction(() => dispatch => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  };);
  // const todos = useSelector(createSelector(
  //   state => state.all,
  //   state => state.byID,
  //   (ids, todos) => ids.map(id => todos[id])
  // ));
  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      try {
        await fetchTodos();
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }
    getTodos();
  }, [setLoading, fetchTodos]);
  return [todos, loading, error];
}
