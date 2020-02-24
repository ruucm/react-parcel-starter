import * as React from "react";
import styled, { css } from "styled-components";

export const Wrap = styled.div`
  background: skyblue;
  width: 100%;
  text-align: center;
  transition: transform 1s;
`;

export function Column({ children }) {
  return <Wrap>{children}</Wrap>;
}

Column.defaultProps = {};
