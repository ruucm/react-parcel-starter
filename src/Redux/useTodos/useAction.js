import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function useAction(action) {
  const dispatch = useDispatch();
  const boundAction = useMemo(() => bindActionCreators(action, dispatch), [
    action,
    dispatch
  ]);
  return boundAction;
}
