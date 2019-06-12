import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Item = styled.div`
  background: green;
  flex: 0 0 33.3%;
`

const Content = styled.div`
  background: pink;
  width: 30px;
`

function Flex() {
  return (
    <Wrap>
      <Item>
        <Content>1</Content>
      </Item>
      <Item>
        <Content>2</Content>
      </Item>
      <Item>
        <Content>3</Content>
      </Item>
      <Item>
        <Content>4</Content>
      </Item>
    </Wrap>
  )
}

export default Flex
