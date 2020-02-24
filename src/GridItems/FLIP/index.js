import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Column } from "./Column";

export const PostLinks = styled.div`
  /* width: 100%; */
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
  return (
    <div>
      <button
        onClick={() => {
          setToggleColumns(!toggleColumns);
        }}
      >
        toggle grid-template-columns
      </button>
      <PostLinks big={toggleColumns}>
        {data.map((item, id) => (
          <Column key={id}>{item}</Column>
        ))}
      </PostLinks>
    </div>
  );
}
