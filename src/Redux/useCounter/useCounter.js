import { useState, useEffect } from "react";
// import { fetchTodos as fetchTodosAction } from "./modules";
import { getTodos } from "../selectors/todoSelector";
import { useSelector } from "react-redux";
import useAction from "./useAction";
import { createSelector } from "reselect";

export default function useCounter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchTodos = useAction(() => dispatch => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        return dispatch({
          type: "RECEIVE_TODOS",
          payload: json
        });
      });
  });
  const todos = useSelector(getTodos);
  console.log("fetchTodos", fetchTodos);

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
  }, []);
  return [todos, loading, error];
}
