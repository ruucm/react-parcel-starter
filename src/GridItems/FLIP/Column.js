import * as React from "react";
import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import useHover from "../../ReactBasics/useHover";

export const Wrap = styled.div`
  background: skyblue;
  width: 100%;
  text-align: center;
`;
export const HoverWrap = styled.div`
  height: 100%;
`;

export function Column({
  children,
  columnMap,
  index,
  setActive,
  setColumnMap
}) {
  const observed = useRef(null);
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    console.log("observed", observed);
    console.log("index", index);
    const newArr = columnMap;
    newArr[newArr.length] = observed.current.getBoundingClientRect();
    // setColumnMap(newArr); // <- why it dosen't needed?
  }, [observed]);

  useEffect(() => {
    if (isHovered) setActive(index);
  }, [isHovered]);

  return (
    <Wrap ref={observed}>
      <HoverWrap ref={hoverRef}>
        {children}

        {isHovered ? "😁" : "☹️"}
      </HoverWrap>
    </Wrap>
  );
}

Column.defaultProps = {};
