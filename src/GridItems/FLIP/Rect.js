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

export function Rect({ active, columnMap }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("active", active);
    if (columnMap.length) {
      let newX = columnMap[active].x;
      let newY = columnMap[active].y - columnMap[0].y; // minus initial y
      setX(newX);
      setY(newY);
    }
  }, [active]);
  return columnMap.length ? (
    <Wrap
      style={{
        width: columnMap[0].width,
        height: columnMap[0].height
      }}
      animate={{
        x: x,
        y: y
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
