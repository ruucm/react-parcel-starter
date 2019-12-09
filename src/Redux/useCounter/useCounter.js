import { useState, useEffect } from "react";
// import { fetchTodos as fetchTodosAction } from "./modules";
import { getCount } from "../selectors/countSelector";
import { useSelector } from "react-redux";
import useAction from "./useAction";
import { createSelector } from "reselect";

export default function hook() {
  const [cLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchTodos = useAction(() => dispatch => {
    setTimeout(() => {
      return dispatch({
        type: "INCREMENT",
        payload: 201
      });
    }, 1000);
  });
  const count = useSelector(getCount);
  console.log("count", count);
  const setCount = () => {};

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
  return [count, cLoading, setCount];
}
