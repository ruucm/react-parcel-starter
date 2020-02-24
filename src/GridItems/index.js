import * as React from "react";
import styled from "styled-components";
import ItemsAnimation from "./ItemsAnimation";

export const PostLinks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 100px;
  justify-items: center;
  justify-content: center;
`;
export const PostLinks2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 100px;
  justify-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  background: skyblue;
  width: 100%;
  text-align: center;
`;
export const Item = styled.div`
  background: green;
`;

const data = [0, 1, 2, 3, 4, 5];

export default function Comp() {
  return (
    <React.Fragment>
      <PostLinks>
        {data.map((item, id) => (
          <Column key={id}>
            <Item>{item}</Item>
          </Column>
        ))}
      </PostLinks>
      <ItemsAnimation />
    </React.Fragment>
  );
}
