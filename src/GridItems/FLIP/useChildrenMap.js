import { useRef, useState, useEffect } from "react";

export default function useChildrenMap() {
  const [childrenMap, setChildrenMap] = useState([]);
  const ref = useRef(null);

  function updateState() {
    let childrens = ref.current.children;
    let newArr = [];
    for (let i = 0; i < childrens.length; i++) {
      const element = childrens[i];
      let info = element.getBoundingClientRect();
      newArr[i] = info;
    }
    setChildrenMap(newArr);
  }

  useEffect(
    () => {
      let childrens = ref.current.children;
      if (childrens) {
        updateState(); // update once
        window.addEventListener("resize", updateState);
        return () => {
          window.removeEventListener("resize", updateState);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, childrenMap];
}
