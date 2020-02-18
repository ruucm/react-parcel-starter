import * as React from "react";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";

const StyledFlex = styled(Flex)`
  background: skyblue;
  border: 1px solid blue;
`;

const Content0 = styled.div`
  background: pink;
  width: 30px;
`;
const Content1 = styled.div`
  background: green;
  width: 30px;
`;

export default function Comp() {
  return (
    <React.Fragment>
      <Flex center full>
        <FlexItem order="2">World</FlexItem>
        <FlexItem order="1">Hello</FlexItem>
      </Flex>
      <Flex alignCenter justifyBetween>
        <Content0>Title</Content0>
        <FlexItem>
          <Content1>Velit nostrud cupidatat aliqua magna.</Content1>
          <br />
          <Content1>Hi</Content1>
        </FlexItem>
      </Flex>

      <StyledFlex alignCenter justifyAround>
        <Content0>Title</Content0>
        <FlexItem>
          <Content1>Velit nostrud cupidatat aliqua magna.</Content1>
          <br />
          <Content1>Hi</Content1>
        </FlexItem>
      </StyledFlex>
    </React.Fragment>
  );
}
