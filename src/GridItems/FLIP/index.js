import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Column } from "./Column";
import { Rect } from "./Rect";
import useChildrenMap from "./useChildrenMap";

export const PostLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-auto-rows: 12rem;
  grid-gap: 16px;
  grid-auto-flow: dense;
  ${props =>
    props.big &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    `}
`;

const data = [0, 1, 2, 3, 4, 5];

export default function Comp() {
  const [toggleColumns, setToggleColumns] = useState(false);
  const [active, setActive] = useState(0);
  const [parentRef, childrenMap] = useChildrenMap();

  return (
    <div>
      <button
        onClick={() => {
          setToggleColumns(!toggleColumns);
        }}
      >
        toggle grid-template-columns
      </button>
      <h1>active - {active}</h1>

      <Rect active={active} childrenMap={childrenMap} />
      <PostLinks big={toggleColumns} ref={parentRef}>
        {data.map((item, id) => (
          <Column key={id} index={id} setActive={setActive}>
            {item}
          </Column>
        ))}
      </PostLinks>
    </div>
  );
}
