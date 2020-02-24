import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Wrap = styled(motion.div)`
  background: pink;
  border: 2px solid blue;
  position: absolute;
  opacity: 0.8;
`;

export function Rect({ active, childrenMap }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("active", active);
    if (childrenMap.length) {
      let newX = childrenMap[active].x;
      let newY = childrenMap[active].y - childrenMap[0].y; // minus initial y
      setX(newX);
      setY(newY);
    }
  }, [active]);
  return childrenMap.length ? (
    <Wrap
      animate={{
        x: x,
        y: y,
        width: childrenMap[0].width,
        height: childrenMap[0].height
      }}
      transition={{
        duration: 0.28
      }}
    >
      Rect
    </Wrap>
  ) : (
    <React.Fragment />
  );
}

Rect.defaultProps = {};
