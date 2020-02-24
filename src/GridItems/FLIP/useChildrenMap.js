import { useRef, useState, useEffect } from "react";

export default function useChildrenMap() {
  const [childrenMap, setChildrenMap] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    let columns = ref.current.children;
    let newArr = [];
    for (let i = 0; i < columns.length; i++) {
      const element = columns[i];
      let info = element.getBoundingClientRect();
      newArr[i] = info;
    }
    setChildrenMap(newArr);
  }, [ref.current]);

  return [ref, childrenMap];
}
