import * as React from "react";
import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import useHover from "../../ReactBasics/useHover";

export const Wrap = styled.div`
  background: skyblue;
  width: 100%;
  text-align: center;
`;

export function Column({ children, index, setActive }) {
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) setActive(index);
  }, [isHovered]);

  return (
    <Wrap ref={hoverRef}>
      {children}
      {isHovered ? "😁" : "☹️"}
    </Wrap>
  );
}

Column.defaultProps = {};
