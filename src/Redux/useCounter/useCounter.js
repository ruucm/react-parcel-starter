import { getCount } from "../selectors/countSelector";
import { useSelector, useDispatch } from "react-redux";

export default function hook() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();
  const setCount = () => dispatch({ type: "INCREMENT" });
  return [count, setCount];
}
